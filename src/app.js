import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Details from './Details';
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
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me Please!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <AdoptionApp />
  </StrictMode>,
  document.getElementById("root"));
