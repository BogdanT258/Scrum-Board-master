import './App.css';
import { Component } from 'react';
import BoardComponent from './Components/BoardComponent'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import allCards from './Components/allCards';

class App extends Component{
  constructor(props){
    super(props)
    
  }

  render(){
    return (
      <div className='outer-div'>              
        {/* <Router>
        <ul>
          <li>
            <Link to="/">Boards</Link>
          </li>
          <li>
            <Link to="/cards">All Cards</Link>
          </li>
        </ul>       
        <hr /> 
        <Routes>
          <Route exact path="/">
            <BoardComponent />
          </Route>
          <Route path="/cards">
            <allCards />
          </Route>
        </Routes>       
        </Router>   */}                            
        <BoardComponent/>      
      </div>  
    )
  }
}

export default App;
