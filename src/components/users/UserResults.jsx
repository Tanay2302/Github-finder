import React from 'react'

import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

import Useritem from './Useritem'
function UserResults() {
    const {users,load}=useContext(GithubContext)
   
  
  
    if(!load){
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <Useritem key={user.id} user={user}/>
        ))}
      </div>
  )
}
else{
    return (<h3>loading</h3>)
}
}

export default UserResults
