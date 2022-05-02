import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList({ item }) {
  return (
    <article key={item.id}>
      <Link to={`/${item.id}`}>
        <h1>
          Name: {item.name} ({item.status})
        </h1>
      </Link>
    </article>
  );
}
