import '../App.css';
import { Component } from 'react';

class Labels extends Component{
    constructor(props){
        super(props)     
    }
    filterLabels = (item) => {
        if (item == "bug") {
            return <label className='label label-red'>{item}</label>;
          } else if(item == "on hold"){
            return <label className='label label-blue'>{item}</label>;
          }else if (item == "report") {
            return <label className='label label-purple'>{item}</label>;
          }else if (item == "enhancement") {
            return <label className='label label-green'>{item}</label>;
          }        
    }
    render(){            
        return(
          <div>             
            {this.props.item}            
          </div>
        )
    }
}

export default Labels;