import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import InnerCard from './InnerCard';

class Board extends Component{
    constructor(props){
        super(props);   

        this.state = {
            data: []
          }     
    }    

    async componentDidMount() {
        try{
          const res = await(await fetch(`http://localhost:3004/cards?state=${this.props.item.state}`)).json();          
          this.setState({
            data: res
          })
        }catch(err){
          console.log(err);
        }
      }

    render(){
        return(
            <div>               
                <Card className='card' border='primary' style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title className="text-center">{this.props.item.title}</Card.Title>
                    <Button className='btn' variant="primary" size="lg">
                      &#x2b;
                    </Button>
                    {this.state.data.map(item => {
                        if (item.state === this.props.item.state) {
                            return <InnerCard key={item.id} item={item}/>                            
                        }
                    })}                              
                  </Card.Body>
                  </Card>
            </div>
        )
    }

}

export default Board;