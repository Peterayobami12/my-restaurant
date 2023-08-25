import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
export default function Comment(){
  const [formData, setFormData] = React.useState ({
    email: "",
    name: "",
    messages:"true"
})
console.log(formData)
function handleChange(event){
    const {name, value,checked, type} = event.target
    setFormData(prevFormData =>{
        return{
            ...prevFormData,
            [name] : type === "checkbox"? checked : value

        }
    })
}

function handleSubmit(e){
    e.preventDefault()
    if(formData.messages === true){
        console.log("Thanks for signing up for newsletter")
    }
}

    return(
        <div className="border border-dark">
            <div>
            <h2 className="text-center mt-4">DROP YOUR COMMENTS BELOW<FontAwesomeIcon icon={faArrowDown}/></h2>
        </div>
        
        <Form className="m-3" onSubmit={handleSubmit}>
          <Form.Label htmlFor="inlineFormInput" className="m" >
            NAME:
          </Form.Label>
          <Form.Control
            className="mb-2" type="text" id="inp" 
            name="name"  value={formData.name} 
           onChange={handleChange} placeholder="NAME"
          /><br />
          <Form.Label htmlFor="inlineFormInput" >
            EMAIL:
          </Form.Label>
          <Form.Control
            className="mb-2" type="email" id="inp" 
            name="email"  value={formData.email} 
           onChange={handleChange} placeholder="EMAIL"
          />
    
      <Row className="align-items-center">
        
    
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup"className="mt-4" >
            COMMENTS:
          </Form.Label>
          <InputGroup className="mb-2 " id="frm"
          name="messages"  value={formData.messages} 
          onChange={handleChange} >
            <InputGroup.Text><FontAwesomeIcon icon={faMessage}/></InputGroup.Text>
            <textarea className="frms">
            <h4>What are your thoughts about our services</h4>
        </textarea>
          </InputGroup>
        </Col>
        </Row>

        <button className="submit text-light">Submit</button>
    </Form>
        
        </div>
    )
}