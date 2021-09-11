import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Upload from '../components/Upload';
import Header from '../components/Header';
import AllResources from '../components/AllResources';
import Resources from '../components/Resources';
import UpdateResource from '../components/UpdateResource';





const App = () => (
  <BrowserRouter>
     
     <Header />
     
      <div className="main-content">
        <Switch>
          <Route component={Upload} path="/" exact={true} />
          <Route component={AllResources} path="/list" />
          <Route component={Resources} path="/student" />
          <Route component={UpdateResource} path="/update/:id" />
          
        </Switch>
      </div>
    
  </BrowserRouter>
);

export default App;