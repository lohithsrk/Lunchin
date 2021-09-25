import React from "react"
import { Switch, Route, Link} from 'react-router-dom';
import Order from "./order";
import Product from "./product";
function App() {
  return (
   
    <Switch>
      <Route exact path = "/order" component={Order}/>
      <Route exact path = "/products" component={Product}/>
    </Switch>
   
  )
  
}

export default App; 
