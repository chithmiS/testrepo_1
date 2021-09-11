import './App.css';
import Header from './components/Header';
import AddResource from './components/AddResource';

import {BrowserRouter as Router,Route} from "react-router-dom"



function App() {
  return (
    <Router>
    <div>
      <Header/>
      
    

      <Route path="/store" exact component={AddResource}/>
  
       
    </div>
    </Router>
  );
}

export default App;
