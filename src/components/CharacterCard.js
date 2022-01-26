import { Link } from "react-router-dom";
function CharacterCard(props) {
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
            <Link to={`/character/${props.character.id}`}>
                <img className="card__img" src={props.character.image === '' ? 'https://static.boredpanda.com/blog/wp-content/uploads/2016/10/newborn-baby-harry-potter-photo-shoot-kayla-glover-4.jpg' : `${props.character.image}`}
                    alt={props.character.name}
                />
                <h4 className="card__title">{props.character.name}</h4>
                <p className="card__description">{getSpecies()}</p>
            </Link>
        </section>
    );
};
export default CharacterCard;