import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux'


const defaultState = [{num1: 1}, {num2: 2}, {num3: 1}, {num4: 2}]

const reducer = (state=defaultState) => {
  console.log(state)
  return state
}

const store = createStore(reducer)

class Wrapper extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
