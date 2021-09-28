import { Link } from "react-router-dom";

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

const Pet = ({
  name,
  animal,
  breed,
  images,
  location,
  id
}) => {
  let defaultHeroImage = 'http://pets-images.dev-apis.com/pets/none.jpg'
  const imageToShow = images && images.length > 0 ? images[0] : defaultHeroImage;

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={imageToShow} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  )
}

export default Pet;