import '../App.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import InnerCard from './InnerCard';
import Button  from 'react-bootstrap/Button';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Form } from 'react-bootstrap';

class Board extends Component{
    constructor(props){
        super(props);   

        this.state = {
            data: [],
            openModal : false,
            updatedData: false
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
    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }
    addCard = (e) => {
      const formData = new FormData(e.currentTarget);
      e.preventDefault();
      let arr = {};      
      for (let [key, value] of formData.entries()) {                
        arr[key] = value;        
      }  
      try {
        const url = "http://localhost:3004/cards";
        const options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(arr)         
      }
        const res = fetch(url, options)
        this.setState({updatedData: !this.state.updatedData})
        this.props.listCards();
      } catch (err) {
        console.log(err);
      }                                                    
    }

    render(){
        return(
            <div>               
                <Card className='card' border='primary' style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title className="text-center">{this.props.item.title}</Card.Title>
                    <Button className='btn' variant="primary" size="lg" onClick={this.onClickButton}>
                        &#x2b;
                    </Button>                    
                    <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                    <Form onSubmit={this.addCard}>
                      <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" name="title"/>                                               
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter description" name="description"/>
                      </Form.Group>
                      <Form.Group className="mb-3">
                      <Form.Select aria-label="Default select example" name='labels'>
                        <option>Label</option>
                        <option value="report">Report</option>
                        <option value="enhancement">Enhancement</option>
                        <option value="on hold">On Hold</option>
                        <option value="bug">Bug</option>
                      </Form.Select>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Add
                      </Button>
                    </Form>
                    </Modal>                                                       
                    {this.state.data.map(item => {                       
                            return <InnerCard key={item.id} item={item}/>                                                  
                    })}                              
                  </Card.Body>
                  </Card>
            </div>
        )
    }

}

export default Board;