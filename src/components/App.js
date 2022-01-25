import '../styles/App.scss';
import { useState, useEffect } from 'react';
import CallToApi from '../services/CallToApi';
import CharacterList from './CharacterList'
import CharacterCard from './CharacterCard';
import Header from './Header';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    CallToApi().then((characterData) => {
      setCharacters(characterData);
      console.log(characterData);
    })
  }, [])

  return (
    <div>
      <Header />
      <CharacterList characters={characters} />
      <CharacterCard />

    </div>
  );
};

export default App;
