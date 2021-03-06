import {createStore} from 'redux'
import { ADD_TO_CART, DELETE_FROM_CART } from './actions'

const initialStore = {
  cart: []
}
const rootReducer =(state=initialStore,{type,id})=>{
  if(type === ADD_TO_CART){
    if(state.cart.find(el=>el===id)) return state
    return{
      ...state,
      cart: state.cart.concat(id)
    }
  }else if(type === DELETE_FROM_CART){
    return{
      ...state,
      cart: state.cart.filter(el =>el !==id)
    }
  }
  return state
}

export default createStore(rootReducer)

