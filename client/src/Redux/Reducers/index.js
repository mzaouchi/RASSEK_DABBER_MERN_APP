import { combineReducers } from "redux";
import AuthReducer from './AuthReducer'
import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";
import ApplicationReducer from "./ApplicationReducer";



const rootReducer=combineReducers({AuthReducer,PostReducer,UserReducer,ApplicationReducer})
export default rootReducer