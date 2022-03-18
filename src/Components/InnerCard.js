import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class InnerCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            data: [],
            data1:[]
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
        let arr = [];
        this.setState({
          data1: item
        })
        console.log(arr);   
      }
    render(){
        return(
          <div>          
            {this.state.data.map(item => {
              if (item.state == "backlog") {
                this.displayDom(item);
              }else console.log("not backlog");           
            })}
          </div>
        )
    }
}

export default InnerCard;