import { createContext } from "react";
import { useReducer } from "react";
import githubReducer from "./GithubReduccer";
const GithubContext=createContext()


export const GithubProvider =({children})=>{
   const initialState={
    users:[],
    user:{},
    repos:[],
    load:false
   }
   const [state,dispatch]=useReducer(githubReducer,initialState)
 
 
    
    return <GithubContext.Provider value={{users:state.users,load:state.load,user:state.user,repos:state.repos,dispatch}}>{children}</GithubContext.Provider>

}
export default GithubContext