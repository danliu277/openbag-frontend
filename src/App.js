  
import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './containers/login'
import Main from './containers/main'

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(routerProps) => <Login {...routerProps} />} />
        <Route exact path="/main" component={(routerProps) => <Main {...routerProps} />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
