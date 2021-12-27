import { StrictMode, lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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

const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const AdoptionApp = () => {
  const theme = useState('green')

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
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
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <AdoptionApp />
  </StrictMode>,
  document.getElementById("root"));
