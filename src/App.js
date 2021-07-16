import React from 'react';
import { Provider } from 'react-redux';
import Apidata from './components/Apidata';
import Repodata from './components/Repodata';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'


//hash router to be used when hosting a website

function App() {
  
  return (
    
      <Provider store = {store}>
        <Router>
          <Switch>
          <Route exact path="/" component={Apidata}/>
          <Route exact path="/user/:username" component={Repodata}/>
          </Switch>
        </Router>
      </Provider>
    
  );
}

export default App;
