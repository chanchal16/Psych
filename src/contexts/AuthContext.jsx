import React,{useState,createContext,useContext} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const AuthContext = createContext()
function AuthContextProvider({children}) {
    const defaultValue = {
        // name:'',
        email: "",
        password: ""
    }
    let[userData,setUserData] = useLocalStorage('psychuser',defaultValue)

    const registerDefaultValue = {
      name:'',
      email:'',
      password:''
    }
    const[registerUser,setRegisterUser] = useLocalStorage('psychuser',registerDefaultValue)

    const providerObj = {userData,setUserData,registerUser,setRegisterUser}
  return (
    <div>
        <AuthContext.Provider value={providerObj}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
const useAuth = ()=>useContext(AuthContext)
export{AuthContextProvider,useAuth}