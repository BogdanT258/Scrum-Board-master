import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { BsFillPenFill } from "react-icons/bs";
import Button  from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';


class InnerCard extends Component{
    constructor(props){
        super(props)               
        this.state = {    
          openModal: false,
          cardData: {}
        }     
    }  

    componentWillReceiveProps = (props) =>{
      this.setState({
        cardData: this.props.item
      })
    }
    onClickButton = e =>{
      e.preventDefault()      
      this.setState({openModal : true})
  }

  onCloseModal = ()=>{
      this.setState({
        openModal : false,        
      })        
  }
  handleChange = e => {
    let obj = {...this.state.cardData};
    console.log(obj);
      if (e.target.name === "labels") {               
          if (obj.labels.includes(e.target.value)) {
            console.log("Overlaped label");            
          }else{                                 
            obj.labels.push(e.target.value);
            this.setState({
              cardData: obj
            });
          }        
      }else{
        obj[e.target.name] = e.target.value
        this.setState({
          cardData: obj
       });
      }      
  }
  saveCard = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:3004/cards?id=${this.props.id}`;
      const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.cardData)         
    }
      await(await fetch(url, options)).json();              
    } catch (err) {
      console.log(err);
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
                    <Button onClick={this.onClickButton}>
                      <BsFillPenFill/>
                    </Button>
                    <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                      <Form onSubmit={this.saveCard}>
                        <Form.Group className="mb-3">
                          <Form.Label>Title</Form.Label>
                          <Form.Control type="text" placeholder="Enter title" name="title" value={this.state.title} onChange={this.handleChange}/>                                               
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter description" value={this.props.item.description} onChange={this.handleChange} name="description"/>
                      </Form.Group>

                      <Form.Group className="mb-3">
                      <Form.Select aria-label="Default select example" value={this.props.item.labels} onChange={this.handleChange} name='labels'  multiple={true} type="select-multiple">                                              
                        {this.props.labels.map(item => {                        
                          return <option key={item} value={item}>{item}</option>                                                                                                             
                        })}                        
                      </Form.Select>
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Save
                      </Button>
                      </Form>
                    </Modal>                     
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