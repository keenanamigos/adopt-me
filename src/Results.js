import Pet from "./Pet";

const Results = ({ pets }) => {
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
                        id={pet.id}
                    >
                    </Pet>
                ))
            )}
        </div>
    );
}

export default Results;