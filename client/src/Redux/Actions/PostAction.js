
import axios from "axios"
import { GET_MY_POSTS, GET_ONE_POST, GET_POSTS } from "../Types/PostTypes"


export const getallposts =()=> async (dispatch)=>{
    try {
        const res = await axios.get('/api/posts/AllPosts')
        dispatch({type : GET_POSTS,payload : res.data.postsList})
    } catch (error) {
        console.log(error)
    }
}

export const getmyposts =()=> async (dispatch)=>{
    const config = {
        headers : {
            Autorization : localStorage.getItem('token')
        }
    }
        try {
            const res = await axios.get('/api/posts/MyPosts',config)
            dispatch({type : GET_MY_POSTS, payload : res.data.posts})
        } catch (error) {
            console.log(error)
        }
}

export const getOnepost =(id)=> async (dispatch)=>{
    const config = {
        headers : {
            Autorization : localStorage.getItem('token')
        }
    }
        try {
            const res = await axios.get(`/api/posts/OnePost/${id}`,config)
            dispatch({type : GET_ONE_POST, payload : res.data.postToFind})
        } catch (error) {
            console.log(error)
        }
}

export const addOnePost=(newpost)=> async (dispatch)=>{
    const config = {
        headers : {
            Autorization : localStorage.getItem('token'),
            }
    }
    try {

        const res=  await  axios.post('/api/posts/newPost',newpost,config)
        console.log(res.data.newPost)
        dispatch(getallposts())
        console.log(res.data.postsList)
    } catch (error) {
        console.log(error)
    }
}

export const deletePost=(id)=> async (dispatch)=>{
    const config = {
        headers : {
            Autorization : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.delete(`/api/posts/${id}`,config)
        dispatch(getmyposts())
    } catch (error) {
        console.log(error)
    }
}

export const editPost=(id,newPost)=>  async (dispatch)=>{
    const config = {
        headers : {
            Autorization : localStorage.getItem('token')
        }
    }
    try {
        const res= await axios.put(`/api/posts/${id}`, newPost,config)
        dispatch(getmyposts())
        
    } catch (error) {
        console.log(error)
    }
       }


