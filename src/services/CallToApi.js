const CallToApi = () => {
    return fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
        .then((response) => response.json())//la API nos devuelve un objeto pero queremos solo los datos de RESULTS, por eso al hacer el map,elegimos results primero
        .then((data) => {
            const cleanData = data.map((character) => {
                return {//nos vamos a la API y seguimos el camino para coger lo que nos interesa
                    id: `${character.name} ${character.dateOfBirth}`,
                    name: character.name,
                    house: character.house,
                    species: character.species,
                    status: character.alive.value,
                    image: character.image,
                    gender: character.gender,
                };
            });
            return cleanData;
        });

};
export default CallToApi;