import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList({ item }) {
  return (
    <article key={item.id}>
      <Link exact to={`/character/${item.id}`}>
        <h1>
          Name: {item.name} ({item.status})
        </h1>
      </Link>
      <h3>
        Specifics: {item.gender} {item.species}
      </h3>
    </article>
  );
}
