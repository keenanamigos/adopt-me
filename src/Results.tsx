import { FunctionComponent } from "react";
import Pet from "./Pet";
import { Pet as PetType } from './ApiResponseTypes';

interface Props {
    pets: PetType[];
}

const Results: FunctionComponent<Props> = ({ pets }) => {
    return (
        <div className="search">
            { !pets.length ? (
                <h2>No pets were found.</h2>
            ) : (
                pets.map(pet => (
                    <Pet
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        key={pet.id}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id.toString()}
                    >
                    </Pet>
                ))
            )}
        </div>
    );
}

export default Results;