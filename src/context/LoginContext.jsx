import {createContext, useState} from 'react'

export let LoginContext = createContext();

export default function LoginContextProvider(props){
    

    let [customerToken ,setCustomerToken] = useState('');
    

    return <LoginContext.Provider value={{customerToken , setCustomerToken}}>
        {props.children}
    </LoginContext.Provider>
} 