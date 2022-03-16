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
          console.log(this.props);
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
            {/* {this.state.data.map.filter(item => {
              if (item.state == "backlog") {
                return this.props.filterData(item);
              }else console.log("yikes");
            })} */}
            {this.props.filterData({name:"yoo"})}
          </div>
        )
    }
}

export default InnerCard;