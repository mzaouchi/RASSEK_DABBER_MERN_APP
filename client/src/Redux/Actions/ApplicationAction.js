import axios from "axios"
import { GET_APPLICATIONS, GET_MY_APPLICATIONS, GET_ONE_APPLICATION, GET_POST_APPLICATIONS } from "../Types/ApplicationTypes"
import { getOnepost } from "./PostAction"

export const getallApplications =()=> async (dispatch)=>{
    try {
        const res = await axios.get('/api/applications/AllApplication')
        dispatch ({type : GET_APPLICATIONS, payload : res.data.applicationsList})
    } catch (error) {
        console.log(error)
    }
}

export const getPostApplication =(id)=> async (dispatch)=>{
    const config = {
        headers : {
            Autorization : localStorage.getItem('token'),
                    }
        }
    try {
        const res = await axios.get(`/api/applications/ApplicationsPost/${id}`,config)
        dispatch({type : GET_POST_APPLICATIONS, payload : res.data.myApplications})
    } catch (error) {
        console.log(error)
    }
}

export const addApplication = (id)=> async (dispatch)=>{
    const config = {
                headers : {
                    Autorization : localStorage.getItem('token'),
                            }
                }
    try {
        const res=  await  axios.post(`/api/applications/newApplication/${id}`,{},config)
        dispatch(getallApplications())
        dispatch(getOnepost(id))
    } catch (error) {
        console.log(error)
    }
}

export const getOneApplication =(id)=>async (dispatch)=>{
    const config = {
                headers : {
                    Autorization : localStorage.getItem('token')
                }
            }
        try {
            const res = await axios.get(`/api/applications/OneApplication/${id}`,config)
            dispatch({type : GET_ONE_APPLICATION, payload : res.data.applicationToFind})
        } catch (error) {
            console.log(error)
        }
}
export const editApplication = (id,newApplication) => async (dispatch)=>{
    const config = {
                headers : {
                    Autorization : localStorage.getItem('token')
                }
            }
        try {
            const res= await axios.put(`/api/applications/UpdateApplication/${id}`, newApplication,config)
            dispatch(getallApplications(),
            dispatch(getOneApplication(id))

            )
        } catch (error) {
            console.log(error)
        }
}
export const getmyApplications =()=> async(dispatch)=>{
    const config = {
                headers : {
                    Autorization : localStorage.getItem('token')
                }
            }
            try {
                const res = await axios.get('/api/applications/MyApplications',config)
                dispatch({type : GET_MY_APPLICATIONS, payload : res.data.myApplications})
            } catch (error) {
                console.log(error)
            }
}


