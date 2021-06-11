import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Personlaize from './components/Personlaize';
import { BrowserRouter, Route, Switch } from "react-router-dom";



class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/Personlaize'>
              <Personlaize />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
