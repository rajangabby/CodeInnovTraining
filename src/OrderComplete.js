import React from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom";
import { Grid, Icon, Button, Segment, Header} from 'semantic-ui-react';
import "./OrderComplete.css";

function OrderComplete() {
  return (
    <div className="OrderComplete">
      <header className="OrderComplete-header">
       <Grid textAlign='center'>
        <Header textAlign='center'>
          Your Order Is Completed!
        </Header>
        </Grid>
        <Grid>
          <Button className="track-btn" href="https://postmates.com/track/del_MY1fydS0mtSLuV">
          Track My Delivery
          </Button>
       </Grid>
      </header>
    </div>
  );
}


export default OrderComplete;