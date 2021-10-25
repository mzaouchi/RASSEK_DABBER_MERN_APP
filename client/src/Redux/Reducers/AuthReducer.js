import { CLEARERRORS, CURRENT, FAIL, LOAD, LOGIN, LOGOUT, REGISTER } from "../Types/AuthTypes";

const InitialState={
    user : null,
    load : false,
    auth : false,
    errors : null,
    users : null
}


const AuthReducer=(state = InitialState, action)=>{
    switch (action.type) {
        case LOAD:
            return {...state,load : true}
        case REGISTER:
            localStorage.setItem('token',action.payload.token)
            return {...state, user : action.payload.userToAdd, load : false, auth : true}
        case FAIL:
            return {...state, errors : action.payload.errors,load : false,auth : false}
        case LOGIN:
            localStorage.setItem('token',action.payload.token)
            return {...state, load : false, auth : true, user : action.payload.userIsFound}
        case CURRENT:
            return {...state, user : action.payload, auth : true, load : false }
        case LOGOUT : 
            localStorage.removeItem('token')
            return {...state, user : null, auth : false, errors : null}
        case CLEARERRORS:
            return {...state,errors:null}
           
        default:
            return state
    }
}

export default AuthReducer;