import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CharacterList from '../components/CharacterList';

export default function Main() {
  return (
    <>
      <div>
        <Link to={`/char`}>Main</Link>
      </div>
    </>
  );
}
