import React from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom";
import { Grid, GridRow, Icon, Container, Button, Segment, Header} from 'semantic-ui-react';
import "./Ordernow1.css";

function OrderNow1() {
  return (
    <div className="Ordernow1">
      Do you want to...
        <Button>
            <Link className="orderrecent-btn" to="/OrderNow1a" href="https://private-6e7fba-greenpizzahampostmates.apiary-mock.com/getlastorderhttps://private-6e7fba-greenpizzahampostmates.apiary-mock.com/createOrder">
              Place Most Recent Order
            </Link>
        </Button>
        <Segment>
            <Button>
            <Link className="ordercustom-btn" to="/OrderNow2">
                Create Custom Order
            </Link>
            </Button>
        </Segment> 
    </div>
  );
}

export default OrderNow1;

