import axios from 'axios'

import { FAIL, LOAD, REGISTER,LOGIN, CURRENT, LOGOUT, CLEARERRORS} from "../Types/AuthTypes"


export const register = (user,history) => async (dispatch)=>{
        dispatch({type:LOAD}) // Load avant le traitement 
    try {
        const res  = await axios.post('/api/users/SignUP',user) // Back
        dispatch({type : REGISTER, payload : res.data}) // Res.data == lobjet envoyé controlers/SignUP {msg, token, user} // Redux
        history.push('/EditProfile')

    } catch (error) {
        dispatch({type : FAIL, payload : error.response.data})
    }
}

export const login =(user,history)=> async (dispatch)=>{
    dispatch({type : LOAD})
    try {
        const res = await axios.post('/api/users/SignIN',user)
        dispatch({type : LOGIN,payload : res.data}) //msg,userIsFound,token
        history.push('/Profile')
    } catch (error) {
        dispatch({type : FAIL, payload : error.response.data})
    }
}

export const current =()=> async (dispatch)=>{
    const config = {
        headers : {
            Autorization : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/users/CurrentUser',config)
        dispatch({type : CURRENT, payload : res.data.user})
    } catch (error) {
        dispatch({type : FAIL, payload : error.response.data})
    }
}

export const logout =()=>{
    return {type : LOGOUT}
}

export const clearerrors =()=>{
    return {type : CLEARERRORS}
}