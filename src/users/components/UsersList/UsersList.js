import React from 'react'
import UsersItem from '../UsersItem/UsersItem'
import './UsersList.css'

const UsersList = (props) => {
  console.log(props)
  if(props.users.length === 0)
  {
    return(
      <div className='center'>No users found</div>
    )
  }
  return(
    <ul className='user-list'>
      {props.users.map((user) => {
        return(
          <UsersItem 
        key = {user.id}
        name = {user.name}
        id = {user.id}
        image = {user.image}
        places = {user.places}/>
      )}
        )
}
        
    </ul>
  )
}
  

export default UsersList