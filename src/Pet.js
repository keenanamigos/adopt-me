import React from 'react';

// This is WITHOUT JSX
// const Pet = (props) => {
//     return React.createElement(
//       "div",
//       {},
//       // The array here is actually optional; you can just pass each as an argument as well
//       [
//         React.createElement("h2", {}, props.name),
//         React.createElement("h3", {}, props.animal),
//         React.createElement("h4", {}, props.breed),
//       ]
//     );
//   };

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h4>{props.breed}</h4>
    </div>
  )
}

export default Pet;