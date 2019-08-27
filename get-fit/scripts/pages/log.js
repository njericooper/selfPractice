import React, { Component } from "react";
import ReactDOM from 'react-dom'; 

import firebase, { auth, provider } from "../firebase.js";
// This doesn't work
// import * as moment from 'moment';
const moment = require("moment");

import Login from "../modules/login.js";

class Log extends Component {
  constructor() {
    super();

    this.state = {
      food_logs: [],
      weekTotalCalories: 0,
      user: null
    };

    this.db = firebase.database();
  }
  
  updateDayTotalCalories() {
    let foodLogCopy = this.state.food_logs;
    let weekTotalCalories = 0;
    this.state.food_logs.map(function(entry, index) {
      // entry is date + foodEntries
      let dayTotalCalories = 0;
      entry.foodEntries.map(function(entry, index) {
        dayTotalCalories += parseInt(entry.calories, 10);
        weekTotalCalories += parseInt(entry.calories, 10);
      });
      foodLogCopy[index].dayTotalCalories = dayTotalCalories;
    });
    
    this.setState({
      food_logs: foodLogCopy,
      weekTotalCalories: weekTotalCalories
    });
  }

  submitNewFoodLog = e => {
    // Dont reload the page or anything weird.
    e.preventDefault();

    // Save the data to Firebase
    let dateRef = this.db.ref(
      "log/" + this.state.user.uid + "/" + this.date.value
    );
    let newRef = dateRef.push();
    let newEntry = {
      food: this.food.value,
      calories: this.calories.value
    };
    newRef.set(newEntry);

    // Update the state immediately
    let newArray = this.state.food_logs.slice();
    newArray[0].foodEntries.push(newEntry);
    this.setState({
      food_logs: newArray
    });

    // Clear the form
    this.form.reset();
    
    this.updateDayTotalCalories();
  };

  // Seems weird to do do this stuff AFTER a component mounts. More re-rendering than necessary? But we need to know if the user exists or not.
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        // Setting up a week of keys
        let today = moment();
        // globalish, because we use in other function
        this.todayForHTML = today.format("YYYY-MM-DD");

        let weekRange = [today.format("YYYY-MM-DD")];
        for (let i = 0; i < 6; i++) {
          let newDay = today.subtract(1, "days");
          weekRange.push(newDay.format("YYYY-MM-DD"));
        }

        let totalWeekCals = 0;
        let foodLogs = [];
        let dayRef;
        let arrayOfPromises = [];
        let i = 0;

        for (let dateKey of weekRange) {
          dayRef = this.db.ref(
            "log/" + user.uid + "/" + dateKey + "/"
          );
          
          arrayOfPromises[i] = dayRef.once("value").then(function(snapshot) {
            let foodEntries = [];
            let dayTotalCalories = 0;
            if (snapshot.val()) {
              Object.entries(
                snapshot.val()).map(function(entry) {
                foodEntries.push({
                  food: entry[1].food,
                  calories: parseInt(entry[1].calories, 10)
                });
                dayTotalCalories += parseInt(entry[1].calories, 10);
              });
            } else {
              foodEntries.push({
                food: "none",
                calories: 0
              });
            }
            foodLogs.push({
              date: dateKey,
              dayTotalCalories: 0,
              foodEntries: foodEntries
            });
            return true;
          });
          i++;
        }
        
        // Don't update state until all data is gotten.
        let _this = this;
        Promise.all(arrayOfPromises).then(function() {
          _this.setState({
            food_logs: foodLogs,
            user: user,
            total_weekly_cals: totalWeekCals
          });
          _this.updateDayTotalCalories();
        });
        
      }
    });
  }

  render() {
    let totalDailyCals = 0;
    let totalWeeklyCals = 0;

    return (
      <section>

        <Login />

        <h1>Get Fit</h1>

        {this.state.user
          ? <div>
              <form
                onSubmit={this.submitNewFoodLog}
                ref={form => (this.form = form)}
                className="food-log-form"
              >
                <div className="">
                  <label htmlFor="date">Date</label>
                  <input
                    required
                    type="date"
                    id="date"
                    defaultValue={this.todayForHTML}
                    ref={date => (this.date = date)}
                  />
                </div>
                <div className="">
                  <label htmlFor="food">Food</label>
                  <input
                    required
                    type="text"
                    id="food"
                    ref={food => (this.food = food)}
                  />
                </div>
                <div className="">
                  <label htmlFor="calories">Calories</label>
                  <input
                    required
                    type="number"
                    id="calories"
                    ref={calories => (this.calories = calories)}
                  />
                </div>
                <div className="">
                  <label>&nbsp;</label>
                  <input
                    type="submit"
                    value="Enter Food Consumed"
                    className="button"
                  />
                </div>
              </form>
            </div>
          : <div>
              <p>Log in above to calculate calories.</p>
            </div>}

        <h2>This Week (total calories: {this.state.weekTotalCalories})</h2>
        
        <div className="weekly-log">
          {this.state.food_logs.map(function(entry, index) {
            return <div key={index} className="">
              <h4>{entry.date}</h4>
              <div className="day-total-calories">{entry.dayTotalCalories}</div>
              {entry.foodEntries.map(function(entry, index) {
                return <div className="single-log" key={index}>
                  {entry.food} @ {entry.calories}
                </div>
              })}
            </div>
          })}
        </div>

      </section>
    );
  }
}

export default Log;
