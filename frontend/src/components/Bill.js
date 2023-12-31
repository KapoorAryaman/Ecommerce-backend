import React, { useState } from 'react';
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import { Form,FormControl,Button,Container,Table } from 'react-bootstrap'
import axios from 'axios';
        
export default function Bill(props) {
  const [mylist,setList]= useState([]);
  const [gross,setGross] = useState('');
  const [billno,setBillno] = useState('');
  const [billdate,setBilldate]= useState('')
 
  async function mysubmit() 
    {
     const data={"cname":localStorage.getItem("cname")};
  const result = await Axios.post("http://localhost:4200/bill");
  setList(result.data);
  console.log(result.data);
   setBillno(result.data[0].billno);
  setGross(result.data[0].amount);
 
    
 
}




 return (
     <div>
   <br/><br/><br/>
<Container>
          

  <Button variant="primary" type="button" onClick={mysubmit}>
    Generate Bill
  </Button>

  <Table striped bordered hover>
<thead>
<tr>
<th colSpan="4">
<h1 align="center">INVOICE</h1>
  <h3 align="center">THANKS FOR VISITING OUR STORE</h3>
  <hr></hr>
  <h4>Invoice No:  {billno}           Invoice Date: {new Date().toDateString()}</h4>

  Customer Name :Aryaman<br/>
  Shipment Address : #125
</th>
</tr>
<tr>
 <th> Particulars</th><th> Price </th><th>Quantity</th> <th>Amount</th> 

</tr>
</thead>
<tbody>
              {mylist.map((item, index) => {
              console.log(item);
              return (
                <tr key={index}>
                       
                  
                  <td>{item.product_name}</td>
                  <td>{item.product_price}</td>
                  <td>{item.purchase_qty}</td>
                  <td>{item.product_price * item.purchase_qty}</td>
                
                        
                </tr>
              );
            })}
           <tr>
            <td colSpan="4" align="right"><h6>Gross Payable Amount {gross} </h6></td> </tr>
           
          </tbody>

      

        </Table>


</Container>

      </div>
      
                
  );
}
