import { GET_APPLICATIONS, GET_MY_APPLICATIONS, GET_ONE_APPLICATION, GET_POST_APPLICATIONS } from "../Types/ApplicationTypes";

const InitialState = {
    Applications : null,
    PostApplication : null,
    MyApplications : null,
    ApplicationFound : null
}
const ApplicationReducer = (state = InitialState,action)=>{
    switch (action.type) {
        case GET_APPLICATIONS:
            return {...state, Applications :  action.payload}
        case GET_POST_APPLICATIONS :
            return {...state, PostApplication : action.payload}
        case GET_ONE_APPLICATION:
            return {...state, ApplicationFound : action.payload}
        case GET_MY_APPLICATIONS:
            return {...state, MyApplications : action.payload}
        default:
            return state
    }
}

export default ApplicationReducer