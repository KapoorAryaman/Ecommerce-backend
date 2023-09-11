import React,{ useState } from 'react';
import ReactDOM from "react-dom";
import {Form,Button,Carousel,Container,Nav,Navbar} from 'react-bootstrap';
import  Axios  from 'axios';

function Register(){

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
       

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "username"){
            setUserName(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmpassword"){
            setConfirmPassword(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
    
    }

    const handleSubmit  = () => {
        console.log(username,password,confirmpassword,email,phone);
    }

     function mysubmit(e) 
    {
        e.preventDefault();
        const data={"username":username,"password":password,"emailid":email,"phone":phone};
        console.log(data);
        Axios.post("http://localhost:4200/register",data).then(
          res => console.log("user registered successfully"));
          window.alert("ok report");
    }
        


    return(
        <div className="one">
            <h1><center>Welcome Signup form</center></h1>
            <Container>
            <Form>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange = {(e) => handleInputChange(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange = {(e) => handleInputChange(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmpassword" >
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" value={confirmpassword} onChange = {(e) => handleInputChange(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="email" value={email} onChange = {(e) => handleInputChange(e)} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="phone" >
                    <Form.Label>Phone no</Form.Label>
                    <Form.Control type="text" placeholder="phone" value={phone} onChange = {(e) => handleInputChange(e)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onChange = {(e) => handleSubmit(e)} onClick={mysubmit}>
                    Submit
                </Button>
            </Form>
            </Container>
        </div>
    );
}

export default Register;