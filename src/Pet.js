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
    <Link to={`/details/${id}`} className="relative block">
      <div>
        <img src={imageToShow} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  )
}

export default Pet;