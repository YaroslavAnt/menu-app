import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import Login from './Login';
import Statistics from './Statistics';
import Administrator from './Administrator';

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
        <HashRouter >
          <div>
            <Route exact path="/" component={App} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/administrator" component={Administrator} />
            <Route path="/login" component={Login} />
          </div>          
        </HashRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
