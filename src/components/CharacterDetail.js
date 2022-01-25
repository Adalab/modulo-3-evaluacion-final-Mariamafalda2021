function CharacterDetail(props) {
    const getGender = () => {
        return props.character.gender === 'female' ? 'Mujer' : 'Hombre';
    };
    const getStatus = () => {
        return props.character.alive === true ? 'Viva' : 'Fallecida';
    };
    const getSpecies = () => {
        if (props.character.species === 'human') {
            return 'Humano'
        } else if (props.character.species === 'half-giant') {
            return 'Semi-gigante'
        } else if (props.character.species === 'werewolf') {
            return 'Hombre-lobo'
        } else if (props.character.species === 'ghost') {
            return 'Fantasma'
        } else {
            return 'Ser mágico'
        };

    };
    return (
        <section>
            <img className="card__img" src={props.character.image} />
            <h4 className="card__title">{props.character.name}</h4>
            <p className="card__description">Estatus: {getStatus()}</p>
            <p className="card__description">Especie{getSpecies}</p>
            <p className="card__description">Genero: {getGender()}</p>
            <p className="card__description">Casa: {props.character.house}</p>
        </section>
    );
};
export default CharacterDetail;