import '../App.css';
import { Component } from 'react';
import Board from './Board';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  NavLink,  
} from "react-router-dom";
import InnerCard from './InnerCard';

class BoardComponent extends Component{
    constructor(props){
        super(props);         
        
        this.state = {
          data: []
        }
    }

    async componentDidMount() {
      this.listCards();
    }           
    listCards =  async () => {  
      try{
        const res = await(await fetch('http://localhost:3004/boards')).json(); 
        this.setState({
          data: res
        })        
      }catch(err){
        console.log(err);
      }          
    }

    render(){
        return(
          <div className='container'>
            <div>
              <h1>SCRUM BOARD</h1>              
            </div>
            <div className='cards'>                                        
              {this.state.data.map(item => {
                return (                  
                    <Board key={item.id} item={item} listCards={this.listCards}/>                
                )
              })}
            </div>
          </div>
        )
    }
}

export default BoardComponent;