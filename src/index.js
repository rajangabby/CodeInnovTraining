import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from './App';
import OrderNow1 from './OrderNow1';
import OrderNow1a from './OrderNow1a';
import OrderNow2 from './OrderNow2';
import OrderComplete from './OrderComplete';
import * as serviceWorker from './serviceWorker';

const routing = ( 
<Router>
     <div>
          <Route exact path="/" component={App} />
          <Route path="/OrderNow1" component={OrderNow1} />
          <Route path="/OrderNow1a" component={OrderNow1a} />
          <Route path="/OrderNow2" component={OrderNow2} />
          <Route path="/OrderComplete" component={OrderComplete} />
    </div>
</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
