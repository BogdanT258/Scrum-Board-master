import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import InnerCard from './InnerCard';

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
        console.log(res);
      }catch(err){
        console.log(err);
      }
    }

    render(){
        return(
            <div className='cards'>
              <h1>{this.state.data.title}</h1>
              {this.state.data.map(item => {
                <Card className='card' border='primary' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='title'>{item.title}</Card.Title>
                  <Button className='btn' variant="primary" size="lg">
                    &#x2b;
                  </Button>
                  <InnerCard/>
                </Card.Body>
                </Card>
              })}
            </div>
        )
    }
}

export default BoardComponent;