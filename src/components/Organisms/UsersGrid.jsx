import React from 'react'
import UserCard from '../Molecules/UserCard'

const UsersGrid = ({users}) => {
  return ( 
    <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
          {
            users.length===0
              ? <div className="t3">Cargando ...</div>
              : users.map(u=> <UserCard key={u.id} name={u.name} username={u.username} email={u.email}/>)

            }
        </div>
      </div>
   );
}
 
export default UsersGrid;