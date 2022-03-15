import './App.css';
import { Component } from 'react';
import CardComponent from './Components/CardComponent'
import InnerCard from './Components/InnerCard'


class App extends Component{
  constructor(props){
    super(props)
    this.state = ({
      boards:[],
      data:[]
    })
  }
  componentDidMount = async () => {
    try{
      const res = await(await fetch('http://localhost:3004/boards')).json(); 
      const res1 = await(await fetch('http://localhost:3004/cards')).json();
      

      this.setState({
        boards: res,
        data:res1
      })
    }catch(err){
      console.log(err);
    }
  }
 renderComponents = () => {
   
 }


  render(){
    return (
      <div className='outer-div'>
        {this.state.boards.map(item => {
          return <CardComponent key={item.id} item={item}>
            {this.state.data.map(item1 => {
              return <InnerCard key={item1.id} data={item1}></InnerCard>
            })}
          </CardComponent>
        })}
      </div>
    )
  }
}

export default App;
