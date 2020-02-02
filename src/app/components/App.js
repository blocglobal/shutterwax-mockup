import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import News from '../views/News';
import articles from '../data/articles';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home articles={articles} />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/news">
          <News articles={articles} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
