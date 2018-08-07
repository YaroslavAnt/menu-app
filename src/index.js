import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { combineReducers } from 'redux'

import './index.css';
import Statistics from './Statistics';
import Administrator from './Administrator';
import App from './App';
import SignUp from './SignUp';

const mainState = [{num1: 1}, {num2: 2}, {num3: 1}, {num4: 2}]
const activeState = {btnActive: 1, menuActive: null}

const AMOUNT_OF_MENUS = 'AMOUNT_OF_MENUS';
const CHANGE_ACTIVE_BTN = 'CHANGE_ACTIVE_BTN';
const CHANGE_ACTIVE_MENU = 'CHANGE_ACTIVE_MENU';
const INPUT_DATA = 'INPUT_DATA';
const SET_FIRST_DISH = 'SET_FIRST_DISH';
const SET_SECOND_DISH = 'SET_SECOND_DISH';
const SET_THIRD_DISH = 'SET_THIRD_DISH';

export const setAmount = (amount) => {
  return{
    type: AMOUNT_OF_MENUS,
    payload: amount
  }
}

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

export const inputData = (email, password) => {
  return{
    type: INPUT_DATA,
    email,
    password
  }
}

export const setDish = (first, second, third) => {
  return{
    type: SET_FIRST_DISH,
    
  }
}

const amountOfMenusReducer = (state='', action) => {
  if(action.type === AMOUNT_OF_MENUS){
    return {state: action.payload}
  } else {
    return state
  }
}

const mainReducer = (state=mainState) => {
  return state
}

const activeReducer = (state=activeState, action) => {
  switch(action.type){
    case CHANGE_ACTIVE_BTN: return {...state, btnActive: action.payload}
    case CHANGE_ACTIVE_MENU: return {...state, menuActive: action.payload}
    //case INPUT_EMAIL: return {...state, email: action.payload}
    default: return state
  }
}

const dataReducer = (state={email: 'w', password: 'w'}, action) => {
  if(action.type===INPUT_DATA){
    return {...state, email: action.email, password: action.password}
  } else {
    return state
  }  
}

const rootReducer = combineReducers({
  amount: amountOfMenusReducer,
  main: mainReducer,
  active: activeReducer,
  data: dataReducer,
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
            <Route path="/signup" component={SignUp} />
          </div>          
        </HashRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
