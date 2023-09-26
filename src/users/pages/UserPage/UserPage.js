import React from 'react'
import UsersList from '../../components/UsersList/UsersList'

const UserPage = () => {
  const USERS = [
    {
      id : 1,
      name : 'Yogaasri',
      image : 'https://picsum.photos/200',
      places : 4
    }
  ]
  return (
    <div>
      <UsersList users = {USERS}/>
    </div>
  )
}

export default UserPage