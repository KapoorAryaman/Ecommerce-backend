import React, { useEffect, useState } from "react";
import { NavLink as Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Admin from "./components/Admin_home";
import Customer from "./components/Customer_home";
import Register from "./components/Register";
import Home from "./components/Home";
import ViewCart from "./components/View_Cart";
import Payment from "./components/Payment";
import Bill from "./components/Bill";
import 'bootstrap/dist/css/bootstrap.min.css'


import { Form, Button, Navbar, Nav, Container, Carousel, Badge, NavDropdown, Section } from 'react-bootstrap';
import Axios from "axios";

function Main() {
  const [mycount, setMycount] = useState(0);

  useEffect(() => {
    var url = `http://localhost:4200/viewcartcount`
    console.log(url)
    Axios.get(url)
      .then(
        res => { setMycount(res.data[0].count); })
  }, [mycount]
  );
  return (
    <div style={{ width: 1500,marginLeft:15,}}>
        <Navbar collapseOnSelect expand="lg">
       
      <Navbar.Brand><img src="logo2.jpg" style={{width:60}}></img></Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
            <Nav.Link href="/" style={{color:"black"}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{color:"black"}}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"black"}}>Pricing</Nav.Link>
              
            </Nav>  
            <Nav>  
            <Nav.Link href="/login" style={{color:"black"}}>Login</Nav.Link>
            <Nav.Link href="/register" style={{color:"black"}}>Sign Up</Nav.Link>
            <Nav.Link href="/viewcart"><img src="cart.png" style={{width:40}}/><Badge bg="danger">{mycount}</Badge></Nav.Link>
               
             
            </Nav>  
          </Navbar.Collapse>  
         
      </Navbar>
    




      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="admin" element={<Admin />}></Route>
        <Route path="customer" element={<Customer />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="viewcart" element={<ViewCart />}></Route>
        <Route path="payment" element={<Payment />}></Route>
        <Route path="bill" element={<Bill />}></Route>


      </Routes>








    </div>
  );
}

function First() {
  return (
    <div>

    </div>

  )
}
export default Main;