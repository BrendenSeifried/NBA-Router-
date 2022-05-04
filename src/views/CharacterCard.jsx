import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchID } from '../services/fetchAPI';

export default function CharacterCard() {
  const { id } = useParams();
  const [char, setChar] = useState({});
  const history = useHistory('');

  useEffect(() => {
    const fetchCharacter = async () => {
      const info = await fetchID(id);
      setChar(info);
    };
    fetchCharacter();
  }, [id]);

  const goBack = async () => {
    history.push(`/`);
  };

  return (
    <article>
      <img alt={`${char.name}`} src={char.image} />
      <h1>Name: {char.name}</h1>
      <h3>
        Specifics: {char.gender} {char.species}
      </h3>
      <button onClick={goBack}>Return to Main page.</button>
    </article>
  );
}
