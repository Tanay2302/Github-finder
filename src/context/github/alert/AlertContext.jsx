import { createContext,useReducer } from "react";

import alertReducer from './AlertReducer'

const AlertContext =createContext()
export const AlertProvider = ({children})=>{
    const initialState=null
    
    const [state,dispatch]=useReducer(alertReducer,initialState)
    const setalert=(msg,type)=>{
        dispatch({
            type:'SET_ALERT',
            payload:{msg,type}
        })
        setTimeout(()=>dispatch({type:'REMOVE_ALERT'}),3000)

    }
    return <AlertContext.Provider value={{alert:state,setalert}}>{children}</AlertContext.Provider>

}
export default AlertContext
