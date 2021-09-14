// Your code is going to go here
const Pet = (props) => {
    return React.createElement(
        "div",
        {},
        // The array here is actually optional; you can just pass each as an argument as well
        [
            React.createElement("h2", {}, props.name),
            React.createElement("h3", {}, props.animal),
            React.createElement("h4", {}, props.breed)
        ]
    );
};

const AdoptionApp = () => {
    return React.createElement(
    "div",
    {},
    [
        React.createElement("h1",{}, "Adopt Me Please!"),
        React.createElement(Pet, { name: "Xavier", animal: "Cat", breed: "Orange Tabby" }),
        React.createElement(Pet, { name: "Louis", animal: "Bird", breed: "Parrot" }),
        React.createElement(Pet, { name: "Jasper", animal: "Dog", breed: "Husky" }),
    ]
    );
};

ReactDOM.render(React.createElement(AdoptionApp), document.getElementById("root"));
