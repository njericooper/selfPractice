import React from 'react';
import ReactDOM from 'react-dom';

const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
    ]);
};

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
        breed: "GP"
    })
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
