const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN
export const searchUsers=async (text)=>{

  
    const params =new URLSearchParams({
        q:text
    })
    const response =await fetch(`${GITHUB_URL}/search/users?${params}`,{
        headers:{
          
        }
    })
    const {items} =await response.json()
 return items
}
export const getUser=async (login)=>{


  
    const response =await fetch(`${GITHUB_URL}/users/${login}`,{
        headers:{
           
        }
    })
    if(response.status===404){
        window.location='/notfound'
    }
    else{
        const data =await response.json()
        return data

    }
   
}
export const getrepo=async (login)=>{

    
    
    const response =await fetch(`${GITHUB_URL}/users/${login}/repos`,{
        headers:{
          
        }
    })
    const data =await response.json()
 return data
}
