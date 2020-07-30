import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart/Cart'
import Modal from './components/Modal'
class App extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route path='/details' component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route component={Default}/>
          </Switch>
          <Modal/>
        </React.Fragment>
      </div>
     
    )
  }
}


export default App;
