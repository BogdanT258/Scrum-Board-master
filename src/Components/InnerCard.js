import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class InnerCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            data: []
          }
    }

    async componentDidMount() {
        try{
          const res = await(await fetch('http://localhost:3004/cards')).json();
          this.setState({
            data: res
          })
        }catch(err){
          console.log(err);
        }
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