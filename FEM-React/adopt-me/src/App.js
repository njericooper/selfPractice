import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
    return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
        name: "Wolfgang",
        animal: "dog",
        breed: "Akita"
    }),
    React.createElement(Pet, {
        name: "Ty",
        animal: "dog",
        breed: "Boston Terrier"
    }),
    React.createElement(Pet, {
        name: "Fletch",
        animal: "dog",
        breed: "Great P"
    })
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
