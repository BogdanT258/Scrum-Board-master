import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import InnerCard from './InnerCard';

class CardComponent extends Component{
    constructor(props){
        super(props);        
    }


    render(){
        return(
            <div className='cards'>
            <Card className='card' border='primary' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='title'>{this.props.item.title}</Card.Title>
              <Button className='btn' variant="primary" size="lg">
                &#x2b;
              </Button>
              <InnerCard/>
            </Card.Body>
            </Card>
            </div>
        )
    }
}

export default CardComponent;