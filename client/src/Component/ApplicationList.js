import { useSelector } from "react-redux"
import Application from "./Application/Application"

function ApplicationList(){
    
    const ApllicationsForPost = useSelector(state=>state.ApplicationReducer.PostApplication)
        
    return(
        <div>
            {ApllicationsForPost.map(el=> <div><Application el = {el}/></div>)}
        </div>
    )
}
export default ApplicationList