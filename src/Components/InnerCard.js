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
      displayDom = (item) => {       
        return(
          <div>
            <h1>{item.title}</h1>
          </div>
        )       
      }
    render(){
        return(
          <div>          
            {this.state.data.map(item => {
              if (item.state == this.props) {
                this.displayDom(item);
              }
            })}
          </div>
        )
    }
}

export default InnerCard;