import React,{Component} from 'react'
import axios from 'axios'
import UsersGrid from '../Organisms/UsersGrid'


// const Users = ({users})=> <UsersGrid  users={users}/>

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      users : []
     }
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users',{method: 'get'})
  //     .then(response => response.json())
  //     .then(response2 => {
  //       this.setState({
  //         users: response2
  //       })
      
  //     })
  // }

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    this.setState({
      users: response.data
    })
    
  }) 
} 
  render() {
    const {users} = this.state 
    return ( 
      <UsersGrid  users={users}/>
     );
  }
}



export default Users