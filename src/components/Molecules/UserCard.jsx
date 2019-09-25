import React from 'react'
import {connect} from 'react-redux'
import { removeUser, addUser } from '../../redux/actionCreators';

const UserCard = ({name,username,email,users,id,removeFromUsers,addToUsers}) => {
  return ( 
    <article className="card">
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{name}</h3>
        <div className="s-main-center">
          {username}
        </div>
        <div className="s-main-center">
          {
             users.find(a=>a===id)
              ? <button className="button--ghost-alert button--tiny" onClick={()=> removeFromUsers(id)}>Dejar de seguir</button>
              : <button className="button--ghost-alert button--tiny" onClick={()=> addToUsers(id) }>{email}</button>
          } 
        </div>
      </div>
    </article>
   );
}
const mapStateToProps = state => ({
  ...state,
  users: state.cartReducer.users
})
const mapDispatchToProps = dispatch =>({
  removeFromUsers(id){
    dispatch(removeUser(id))
  },
  addToUsers(id){
    dispatch(addUser(id))
  }
})
 
export default connect(mapStateToProps,mapDispatchToProps)(UserCard)