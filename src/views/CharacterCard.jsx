import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchID } from '../services/fetchAPI';

export default function CharacterCard() {
  const { id } = useParams();
  const [char, setChar] = useState({});

  useEffect(() => {
    const fetchCharacter = async () => {
      const info = await fetchID(id);
      console.log(info);
      setChar(info);
    };
    fetchCharacter();
  }, [id]);

  return (
    <article>
      <img alt="image of character" src={char.image} />
      <h1>
        Name: {char.name} ({char.status})
      </h1>
      <h3>
        Specifics: {char.gender} {char.species}
      </h3>
    </article>
  );
}
