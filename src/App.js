import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Display from './components/display/display'
import Button from './components/button/button'
import Container from './components/container/container'

import * as actionCreators from '../src/store/actions'

class App extends Component {
    increment = () => {
      this.props.increment()
    }
    decrement = () => {
      this.props.decrement()
    }
    reset = () => {
      this.props.reset()
    }
  
  render() {
    return (
     <div>
       <Display>{this.props.count}</Display>
       <Container>
        <Button onClick={this.increment}>Add</Button>
        <Button onClick={this.decrement}>Remove</Button>
        <Button onClick={this.reset}>Reset</Button>
       </Container>
     </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch) => ({
   increment: () => dispatch({type:"INCREMENT"}),
   decrement: () => dispatch({type:"DECREMENT"}),
   reset: () => dispatch({type:"RESET"})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
