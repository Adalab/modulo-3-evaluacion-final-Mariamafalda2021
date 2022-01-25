import '../styles/App.scss';
import { useState, useEffect } from 'react';
import CallToApi from '../services/CallToApi';
import CharacterList from './CharacterList'
import CharacterCard from './CharacterCard';

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

      <h2>HARRY POTTER</h2>
      <CharacterList />
      <CharacterCard />

    </div>
  );
};

export default App;
