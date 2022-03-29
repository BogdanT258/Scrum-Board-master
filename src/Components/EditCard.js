import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { BsFillPenFill } from "react-icons/bs";
import Button  from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';


class EditCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            openModal: false,
            labels: [],
            data: [{title: "", description: "", labels: []}]
        }
    }
    async componentDidMount() {
        this.listData();
    }  
    listData = async () => {
        try{
            const res = await(await fetch('http://localhost:3004/labels')).json(); 
            const res1 = await(await fetch(`http://localhost:3004/cards?id=${this.props.id}`)).json(); 
            this.setState({
              labels: res,
              data: res1
            })        
          }catch(err){
            console.log(err);
          } 
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
        let obj = {...this.state.data};
        console.log(obj);
          if (e.target.name === "labels") {   
              console.log(e);            
              if (obj[0].labels.includes(e.target.value)) {               
                console.log("Overlaped label");            
              }else{                                 
                obj[0].labels.push(e.target.value);
                this.setState({
                  data: obj
                });
              }        
          }else{
            obj[0][e.target.name] = e.target.value
            this.setState({
              data: obj
           });
          }      
      }
    saveCard = async (e) => {
        e.preventDefault();
        try {
          const url = `http://localhost:3004/cards/${this.props.id}`;          
          const options = {
          method: "PUT",
          headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.data[0])         
        }
          await(await fetch(url, options)).json(); 
          this.props.listData(); 
          this.setState({
            openModal : false
          })            
        } catch (err) {
          console.log(err);
        }          
    }      
    render(){
        return(
          <div>
              <Button onClick={this.onClickButton}>
                      <BsFillPenFill/>
                    </Button>
                    <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                      <Form onSubmit={this.saveCard}>
                        <Form.Group className="mb-3">                            
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title" name="title" value={this.state.data[0].title} onChange={this.handleChange}/>                                                                                                       
                        </Form.Group>

                        <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter description" value={this.state.data[0].description} onChange={this.handleChange} name="description"/>
                      </Form.Group>

                      <Form.Group className="mb-3">
                      <Form.Select aria-label="Default select example" value={this.state.data.labels} onChange={this.handleChange} name='labels'  multiple={true} type="select-multiple">                                              
                        {this.state.labels.map(item => {
                            if (item == this.state.data[0].labels) {                                
                                return <option value={item} selected>{item}</option>                                              
                            }else{
                                return <option value={item}>{item}</option> 
                            }
                        })}                       
                      </Form.Select>
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Save
                      </Button>
                      </Form>
                    </Modal>                     
          </div>
        )
    }
}

export default EditCard;