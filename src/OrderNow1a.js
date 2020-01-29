import React from 'react';
import {Link} from "react-router-dom";
import { Grid, Form, Checkbox, Image, Icon, Button, Segment, Header} from 'semantic-ui-react';
import "./OrderNow1a.css";


var OrdsData = [];

function OrderNow1a() {

        fetch('https://smtoa9hw8m0maww-customerdw.adb.us-ashburn-1.oraclecloudapps.com/ords/kevin/orderdetails/order/+17139994444')
          .then(res => res.json())
          .then((data) => {

            // this.dataa = data;
            OrdsData.push(data.items[0]);
            console.log("Console ORDS")
            console.log( data)

          })
          .catch(console.log)

  return (
    <div className="OrderNow1a">
      <header className="OrderNow1a-header">
        let's confirm...
       <Grid textAlign='center'>
        <Form className="Orderinfo">
        <Form.Field>
            <label>Pizza Type</label>
            <input placeholder='Cheese' />
        </Form.Field>
        <p></p>
        <Form.Field>
            <label>Size</label>
            <input placeholder='Large' />
        </Form.Field>
        <p></p>
        <Form.Field>
            <label>Quantity</label>
            <input placeholder='2' />
        </Form.Field>
        <p></p>
        <Form.Field>
            <label>Deliver To</label>
            <input placeholder= 'Gabby Rajan' />
        </Form.Field>
        <p></p>
        <Form.Field>
            <label>Contact Phone Number</label>
            <input placeholder='(817) 123-4567' />
        </Form.Field>
        <p></p>
        <Form.Field>
            <label>Delivery Address</label>
            <input placeholder='2300 Cloud Way Dr. Austin, TX' />
        </Form.Field>
        <p></p>
        <Form.Field>
            <label>Delivery Driver</label>
            <input placeholder='Kevin Mai (Postmates)' />
        </Form.Field>
        <p></p>
        <Button type='submit'>
            <Link className="confirm-btn" to="/OrderComplete"  >
            Pizza Time
            </Link>
        </Button>
        </Form>
       </Grid>
      </header>
    </div>
  );
}


export default OrderNow1a;

