import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterCard from './views/CharacterCard';
import Main from './views/Main';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="char/:id">
          <CharacterCard />
        </Route> */}
        {/* <Route path="/char">
          <CharacterList />
        </Route> */}
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
