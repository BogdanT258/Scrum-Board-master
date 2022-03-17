import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import InnerCard from './InnerCard';

class BoardComponent extends Component{
    constructor(props){
        super(props);         
        
        this.state = {
          data: [],
          cards:[]
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
    
    sendDataToParent = (item) => {
      this.setState({
        cards: [...this.state.cards, item]
      })
    }

    render(){
        return(
            <div className='cards'>              
              {this.state.data.map(item => {
                return (
                  <Card key={item.id} className='card' border='primary' style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title className='title'>{item.title}</Card.Title>
                    <Button className='btn' variant="primary" size="lg">
                      &#x2b;
                    </Button>
                    <InnerCard item={item} sendData={this.sendDataToParent}/>             
                  </Card.Body>
                  </Card>
                )
              })}
            </div>
        )
    }
}

export default BoardComponent;