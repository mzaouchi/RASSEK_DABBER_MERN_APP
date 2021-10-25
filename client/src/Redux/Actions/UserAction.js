import axios from 'axios'
import { GET_ONE_USER, GET_USERS } from '../Types/UsreTypes'
import { current } from './AuthAction'


export const getallUsers =()=> async (dispatch)=>{
    const config = {
        headers : {
            Autorization : localStorage.getItem('token'),
           
        }
    }
    try {
        const res = await axios.get('/api/users/AllUsers',config)
        dispatch({type : GET_USERS,payload : res.data.usersList})
    } catch (error) {
        console.log(error)
    }
}

export const editUser =(id,{name,email,phone,profession,adresse,birth,description,userImage})=> async (dispatch)=>{
    const config = {
        headers : {
            Autorization : localStorage.getItem('token'),
             "content-type": 'multipart/form-data' 
        }
    }
    try {

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("profession", profession);
        formData.append("birth", birth);
        formData.append("description", description);
        formData.append("adresse", adresse);
        formData.append("userImage", userImage);
   
        const res=  await  axios.put(`/api/users/updateUser/${id}`,formData,config)
        dispatch(current())
        dispatch(getallUsers())
          
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser=(id)=> async (dispatch)=>{
    const config = {
                headers : {
                    Autorization : localStorage.getItem('token')
                }
            }
        try {
            const res = await axios.delete(`/api/users/deleteUser/${id}`,config)
            dispatch(getallUsers())
        } catch (error) {
            console.log(error)
        }
}

export const getOneUser =(id)=> async (dispatch)=>{
    const config = {
                headers : {
                    Autorization : localStorage.getItem('token')
                }
            }
        try {
            const res = await axios.get(`/api/users/OneUser/${id}`,config)
            dispatch({type : GET_ONE_USER, payload : res.data.userToFind })
        } catch (error) {
            console.log(error)
        }
}
