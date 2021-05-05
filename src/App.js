import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header'
import './assets/scss/layout.scss'
import Home from './components/common/Home';
import Characters from './components/characters/Characters';
import CounterDeaths from './components/deaths/Counter-Deaths';
import Quotes from './components/quotes/Quotes';
import CharactersContextProvider from  './contexts/CharactersContext';
import CounterDeathsContextProvider from  './contexts/CounterDeathsContext';
import QuoteContextProvider from  './contexts/QuoteContext';

import './assets/scss/characters.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
              <Home />
        </Route>
        <Route exact path="/characters">
          <CharactersContextProvider>
              <Characters />
          </CharactersContextProvider>
        </Route>
        <Route exact path="/counter">
          <CounterDeathsContextProvider>
              <CounterDeaths />
          </CounterDeathsContextProvider>
        </Route>
        <Route exact path="/quotes">
          <QuoteContextProvider>
              <Quotes />
          </QuoteContextProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
