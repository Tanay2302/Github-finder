import React from "react";
import { useState,useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/github/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {

    const [t,st]=useState('')
    const {users,dispatch}=useContext(GithubContext)
    const {setalert}=useContext(AlertContext)
    const ch=(e)=>{
        st(e.target.value)
      

    }
    const hs=async (e)=>{
        e.preventDefault()
        if(t===''){
            setalert('please enter something','error')
        }
        else{
          dispatch({type:'SET_LOADING'})
            const users=await searchUsers(t)
            dispatch({type:'GET_USERS',payload:users})
            st('')
        }
      

    }
 
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={hs}>
          <div className="form-control"></div>
          <div className="relative">
          <input
              type="text"
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder="Search"
                value={t}
                onChange={ch}
              
              />
               <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >Go</button>
          </div>
        </form>
      </div>
{users.length>0&&  <div>
        <button onClick={()=>dispatch({type:'GET_USERS',payload:[]})} className=" btn btn-ghost btn-lg">Clear</button>
      </div>}
    
    </div>
  );
}

export default UserSearch;
