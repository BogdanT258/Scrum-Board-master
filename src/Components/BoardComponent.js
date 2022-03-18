import '../App.css';
import { Component } from 'react';
import Board from './Board';

class BoardComponent extends Component{
    constructor(props){
        super(props);         
        
        this.state = {
          data: []
        }
    }

    async componentDidMount() {
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
            <div className='cards'>              
              {this.state.data.map(item => {
                return (
                  <Board key={item.id} item={item}/>
                )
              })}
            </div>
        )
    }
}

export default BoardComponent;