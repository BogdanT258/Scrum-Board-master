import './App.css';
import { Component } from 'react';
import BoardComponent from './Components/BoardComponent'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,  
} from "react-router-dom";
import InnerCard from './Components/InnerCard';
import allCards from './Components/allCards';

class App extends Component{
  constructor(props){
    super(props)
    
  }

  render(){
    return (
      <div className='outer-div'> 
        <Router>
          <Routes>
            <Route path='/' element={allCards}/>
          </Routes>
        </Router>               
        <BoardComponent/>
      </div>
    )
  }
}

export default App;
