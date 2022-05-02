import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CharacterCard from './views/CharacterCard';
import Main from './views/Main';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/character/:id">
          <CharacterCard />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
