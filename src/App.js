import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Display from './components/display/display'
import Button from './components/button/button'
import Container from './components/container/container'

import * as actionCreator from '../src/store/actions'

const App = ({...props}) => (
  <div>
    <Display>{props.count}</Display>
    <Container>
    <Button onClick={props.increment}>Add</Button>
    <Button onClick={props.decrement}>Remove</Button>
    <Button onClick={props.reset}>Reset</Button>
    </Container>
  </div>
)

const mapStateToProps = (state) => ({
  count: state.count
})



const mapDispatchToProps = (dispatch) => {
  return {
   increment: () => dispatch(actionCreator.increment()),
   decrement: () => dispatch(actionCreator.decrement()),
   reset: () => dispatch(actionCreator.reset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
