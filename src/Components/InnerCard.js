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

    // async componentDidMount() {
    //     try{
    //       const res = await(await fetch('http://localhost:3004/cards')).json();          
    //       this.setState({
    //         data: res
    //       })
    //     }catch(err){
    //       console.log(err);
    //     }
    //   }
    //   doSomething = () => {
    //     this.state.data.map(item => {
    //       if (item.state == "backlog") {
    //         this.displayDom(item);
    //       }else console.log("not backlog");           
    //     })
    //   }
    //   displayDom = (item) => {       
         
    //   }
    // render(){
    //     return(
    //       <div>          
    //         {this.doSomething()}
    //       </div>
    //     )
    // }
}

export default InnerCard;