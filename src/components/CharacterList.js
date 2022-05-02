import React from 'react';

export default function CharacterList({ item }) {
  return (
    <div>
      <article key={item.id}>
        <div>
          <h1>
            Name: {item.name} ({item.status})
          </h1>
          <h3>
            Specifics: {item.gender} {item.species}
          </h3>
        </div>
      </article>
    </div>
  );
}
