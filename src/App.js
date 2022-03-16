import './App.css';
import { Component } from 'react';
import BoardComponent from './Components/BoardComponent'
import InnerCard from './Components/InnerCard'


class App extends Component{
  constructor(props){
    super(props)
    
  }

  render(){
    return (
      <div className='outer-div'>
        <BoardComponent/>
      </div>
    )
  }
}

export default App;
