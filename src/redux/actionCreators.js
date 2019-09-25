import {ADD_TO_CART, REMOVE_FROM_CART, ADD_USER, REMOVE_USER, GET_COURSE_LIST, GET_USERS} from './actions'
import axios from 'axios'

const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

const removeFromCart = id =>({
  type: REMOVE_FROM_CART,
  id
})

const addUser = id => ({
  type: ADD_USER,
  id
})
const removeUser = id => ({
  type: REMOVE_USER,
  id
})

const getCourseList = () => dispatch => {
  axios.get('http://my-json-server.typicode.com/RobertoQuintero/demo/courses')
    .then(resp => {
      return dispatch({
        type: GET_COURSE_LIST,
        courses: resp.data
      })
    })
}

const getUsersList = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
      return dispatch({
        type: GET_USERS,
        users: resp.data
      })
    })
}

export {addToCart,removeFromCart,addUser,removeUser,getCourseList,getUsersList}