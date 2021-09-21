import ReactDOM from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';

// This is WITHOUT JSX
// const AdoptionApp = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me Please!"),
//     React.createElement(Pet, {
//       name: "Xavier",
//       animal: "Cat",
//       breed: "Orange Tabby",
//     }),
//     React.createElement(Pet, {
//       name: "Louis",
//       animal: "Bird",
//       breed: "Parrot",
//     }),
//     React.createElement(Pet, { name: "Jasper", animal: "Dog", breed: "Husky" }),
//   ]);
// };

const AdoptionApp = () => {
  return (
    <div>
      <h1>Adopt Me Please!</h1>
      <Pet name="Xavier" animal="Cat" breed="Orange Tabby" />
      <Pet name="Louis" animal="Bird" breed="Parrot" />
      <Pet name="Jasper" animal="Dog" breed="Husky" />
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<AdoptionApp />, document.getElementById("root"));
