import { Link } from "react-router-dom";

function CharacterDetail(props) {
    if (props.character === undefined) {
        return (
            <p>No encontrado</p>
        )
    }
    const getGender = () => {
        return props.character.gender === 'female' ? 'Mujer' : 'Hombre';
    };
    const getStatus = () => {
        return props.character.alive === true ? 'Viv@' : 'Fallecid@';
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
            <Link to='/' className='detail__link'>
                Volver
            </Link>

            <img className="card__img" src={props.character.image === '' ? 'https://static.boredpanda.com/blog/wp-content/uploads/2016/10/newborn-baby-harry-potter-photo-shoot-kayla-glover-4.jpg' : `${props.character.image}`}
                alt={props.character.name} />

            <h4 className="card__title">{props.character.name}</h4>
            <p className="card__description">Estatus: {getStatus()}</p>
            <p className="card__description">Especie{getSpecies()}</p>
            <p className="card__description">Genero: {getGender()}</p>
            <p className="card__description">Casa: {props.character.house}</p>
        </section>
    );
};
export default CharacterDetail;