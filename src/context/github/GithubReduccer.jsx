const githubReducer =(state,action)=>{
    switch(action.type){
        case 'GET_USERS':
           return {
                ...state,users:action.payload,
                load:false
            }
            case 'SET_LOADING':
                return {
                     ...state,load:true
                 }
            case 'GET_USER':
                return{
                    ...state,user:action.payload,load:false
                }     
            case 'GET_REPOS':
                return{
                    ...state,repos:action.payload,loading:false
                }    

        default:
            return state

    }

}
export default githubReducer