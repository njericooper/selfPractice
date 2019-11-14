const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal), 
        React.createElement("h2", {}, breed)
    ]);
};


const App = () => {
    return React.createElement(
    "div",
    {},
    [React.createElement("h1", {}, "Adopt Me!"), 
    React.createElement(Pet, 
        { 
            name: "Wolfgang", 
            animal: "Dog", 
            breed: "Akita"
        }),
    React.createElement(Pet, 
        { 
            name: "Ty", 
            animal: "Dog", 
            breed: "Terrier"
    }), 
    React.createElement(Pet, 
        { 
            name: "Fletch", 
            animal: "Dog", 
            breed: "GP"})
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));