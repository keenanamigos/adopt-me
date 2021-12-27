import { StrictMode, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Details from './Details';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';

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
  const theme = useState('green')

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
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
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default AdoptionApp;