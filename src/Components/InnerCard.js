import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class InnerCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <Card>
            <Card.Header>yoo</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>        
            </Card.Body>
        </Card>
        )
    }
}

export default InnerCard;