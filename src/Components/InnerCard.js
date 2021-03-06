import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import EditCard from './EditCard';


class InnerCard extends Component{
    constructor(props){
        super(props)               
        this.state = {    
          openModal: false,          
        }     
    }              
    render(){            
        return(
          <div className='inner-Card'>             
            <Card  border='primary'>
              <Card.Body> 
                <div className='edit'> 
                <div className='labels-div'>
                {this.props.item.labels.map(item => {                                
                  if (item === "bug") {
                    return <label key={item} className='label label-red'>{item}</label>;
                  } else if(item === "on hold"){
                    return <label key={item} className='label label-blue'>{item}</label>;
                  }else if (item === "report") {
                    return <label key={item} className='label label-purple'>{item}</label>;
                  }else if (item === "enhancement") {
                    return <label key={item} className='label label-green'>{item}</label>;
                  }else return <label key={item} className='label'>{item}</label>;
                })} 
                </div> 
                  <div>
                    <EditCard id={this.props.item.id} listData={this.props.listData}/>                    
                  </div>
                </div>
                <Card.Title className="text-center">{this.props.item.title}</Card.Title>
                <Card.Text>{this.props.item.description}</Card.Text>
              </Card.Body>
            </Card>                    
          </div>
        )
    }
}

export default InnerCard;