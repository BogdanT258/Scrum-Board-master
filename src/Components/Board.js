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
            cardData: { title: '' , labels: [] , description: ' ', state: this.props.item.state},           
            labels: []
          }     
    }  
    
    async componentDidMount() {
        this.listData();
      } 
    listData = async () => {
      try{
        const resLabels = await(await fetch(`http://localhost:3004/labels`)).json();
        const res = await(await fetch(`http://localhost:3004/cards?state=${this.props.item.state}`)).json();                          
        this.setState({
          data: res,
          labels: resLabels       
        })
      }catch(err){
        console.log(err);
      }
    }
    handleChange = e =>{  
      let obj = {...this.state.cardData};
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
    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }

    onCloseModal = ()=>{
        this.setState({
          openModal : false,
          cardData: { title: '' , labels: [] , description: ' ', state: this.props.item.state}
        })        
    }
    addCard = async (e) => {    
      e.preventDefault();        
      try {
        const url = "http://localhost:3004/cards";
        const options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.cardData)         
      }
        await(await fetch(url, options)).json();        
        this.listData();
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
                        <Form.Control type="text" placeholder="Enter title" name="title" value={this.state.cardData.title} onChange={this.handleChange}/>                                               
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter description" value={this.state.cardData.description} onChange={this.handleChange} name="description"/>
                      </Form.Group>
                      <Form.Group className="mb-3">
                      <Form.Select aria-label="Default select example" value={this.state.cardData.labels} onChange={this.handleChange} name='labels'  multiple={true} type="select-multiple">                                              
                      {this.state.labels.map(item => {                        
                        return <option key={item} value={item}>{item}</option>                                                                                                             
                      })}                        
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