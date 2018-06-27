import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { combineReducers } from 'redux'

import './index.css';
import Login from './Login';
import Statistics from './Statistics';
import Administrator from './Administrator';
import App from './App';

const mainState = [{num1: 1}, {num2: 2}, {num3: 1}, {num4: 2}]
const activeState = {btnActive: 1, menuActive: null}

const CHANGE_ACTIVE_BTN = 'CHANGE_ACTIVE_BTN';
const CHANGE_ACTIVE_MENU = 'CHANGE_ACTIVE_MENU';
const INPUT_EMAIL = 'INPUT_EMAIL';

export const changeActiveBtn = (item) => {
  return{
    type: CHANGE_ACTIVE_BTN,
    payload: item
  }
}

export const changeActiveMenu = (number) => {
  return{
    type: CHANGE_ACTIVE_MENU,
    payload: number
  }
}

export const inputEmail = (email) => {
  return{
    type: INPUT_EMAIL,
    payload: email
  }
}

const mainReducer = (state=mainState) => {
  return state
}

const activeReducer = (state=activeState, action) => {
  switch(action.type){
    case CHANGE_ACTIVE_BTN: return {...state, btnActive: action.payload}
    case CHANGE_ACTIVE_MENU: return {...state, menuActive: action.payload}
    case INPUT_EMAIL: return {...state, email: action.payload}
    default: return state
  }
}

const emailReducer = (state={email: ''}) => {
  return state
}

const rootReducer = combineReducers({
  main: mainReducer,
  active: activeReducer,
  email: emailReducer
})

const store = createStore(rootReducer)

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
