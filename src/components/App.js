import '../styles/App.scss';
import { useState, useEffect } from 'react';
import CallToApi from '../services/CallToApi';
import CharacterList from './CharacterList'
import CharacterCard from './CharacterCard';
import Header from './Header';
import Filter from './Filters';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  //Llamamos a la api, y los datos devueltos se guardan en la variable de estado characters.
  useEffect(() => {
    CallToApi().then((characterData) => {
      setCharacters(characterData);
    })
  }, [])


  //Creamos la función manejadora de los filtros
  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    }
  }

  //Guardamos los personajes filtrados en una variable
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
  console.log(filteredCharacters)


  return (
    <div>
      <Header />
      <Filter
        handleFilter={handleFilter}
        filterName={filterName}
      />
      <CharacterList characters={filteredCharacters} />


    </div>
  );
};

export default App;
