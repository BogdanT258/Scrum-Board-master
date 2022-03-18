import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class InnerCard extends Component{
    constructor(props){
        super(props)     
    }

    render(){
      
      const renderLabel = () => {
        if (this.props.item.labels == "bug") {
          return <label className='label label-red'>Bug</label>;
        } else if(this.props.item.labels == "on hold"){
          return <label className='label label-blue'>On Hold</label>;
        }else if (this.props.item.labels == "report") {
          return <label className='label label-purple'>Report</label>;
        }else if (this.props.item.labels == "enhancement") {
          return <label className='label label-green'>Enhancment</label>;
        }
      }


        return(
          <div className='inner-Card'>             
            <Card  border='primary'>
              <Card.Body>
                {renderLabel()}                                               
                <Card.Title className="text-center">{this.props.item.title}</Card.Title>
                <Card.Text>{this.props.item.description}</Card.Text>
              </Card.Body>
            </Card>                    
          </div>
        )
    }
}

export default InnerCard;