import React from "react";
import { Switch, Route } from 'react-router-dom';

import MainComponent from "./components/mainComponent/mainComponent";
import Landing from './components/landing/landing'


const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/main" component={MainComponent} />
      </Switch>
  );
};

export default App;
