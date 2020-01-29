import React from 'react';
import {Link} from "react-router-dom";
import { Grid, Image, Icon, Button, Segment, Header} from 'semantic-ui-react';
import "./App.css";

function App() {
  return (
    <div className="App"  float="right">
      <header className="Login">
      Logged in as Gabby Rajan
        </header>
      <header className="App-header">
       <Grid textAlign='center'>
        <Header textAlign='center'>
        Welcome to Mama Maggy's Pizza
        </Header>
        </Grid>
        <Grid size='huge'>
          <Button size='huge'>
            <Link className="ordernow-btn" to="/OrderNow1"  >
            Order Now
            </Link>
          </Button>
          <Segment>
            <Button>
              Track My Delivery
            </Button>
          </Segment>
       </Grid>
      </header>
    </div>
  );
}


export default App;

