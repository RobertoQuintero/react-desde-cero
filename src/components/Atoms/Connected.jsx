import React from 'react';
import {connect} from 'react-redux'

const Connected = ({usersLength}) =>(
  <li>
    <button className="button tiny ghost">{`Users: ${usersLength.length}`}</button>
  </li>
)
const mapStateToProps = state=>({
  usersLength: state.usersReducer.users //aqui va el reducer follow
})

const mapDispatchToProps =()=>({})

export default connect(mapStateToProps,mapDispatchToProps)(Connected)