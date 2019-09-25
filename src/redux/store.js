import {createStore, applyMiddleware} from 'redux'
import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_USER, ADD_USER, GET_COURSE_LIST, GET_USERS } from './actions'
import {composeWithDevTools} from 'redux-devtools-extension'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
const initialStore = {
  cart: [],
  users:[]
}
const initialCourses = {
  courses: [] 
}

const initialUsers={
  users: []
}
const cartReducer = (state = initialStore,{type,id}) => { //se destructura action {}
  // if(state.cart.find(a => a===id)) return state
  if(type === ADD_TO_CART){
    return {
      ...state,
      cart: state.cart.concat(id)
    }
  }else if(type === REMOVE_FROM_CART){
    return{
      ...state,
      cart: state.cart.filter(el => el!==id)
    }
  }else if(type === ADD_USER){
    return{
      ...state,
      users: state.users.concat(id)
    }
  }else if(type === REMOVE_USER){
    return{
      ...state,
      users: state.users.filter(el => el!==id)
    }
  }
  
  return state
}

const coursesReducer = (state = initialCourses,{type,courses}) => {
  if(type === GET_COURSE_LIST){
    return {
      ...state,
      courses: courses
    }
  }
  return state
}

const usersReducer = (state = initialUsers,{type,users}) => {
  if(type === GET_USERS){
    return {
      ...state,
      users: users
    }
  }
  return state
}

export default createStore(combineReducers({cartReducer,coursesReducer,usersReducer}), composeWithDevTools(applyMiddleware(thunk)))