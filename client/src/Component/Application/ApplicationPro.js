import { useDispatch, useSelector } from "react-redux";
import { editApplication } from "../../Redux/Actions/ApplicationAction";

function ApplicationPro(){
    
    const ApplicationF = useSelector(state=>state.ApplicationReducer.ApplicationFound)
    const dispatch = useDispatch()
         
    return(
        <div>
            {
                ApplicationF && 
                
                <div>
                    <h1>{ApplicationF._id}</h1>
                    <h1>{ApplicationF.statutApp}</h1>
                    {ApplicationF.statutApp == 'En cours de traitement' ? 
                    <div>
                        <button onClick={()=>dispatch(editApplication(ApplicationF._id,{statutApp :  'Accepter'}))}>Valider</button>
                        <button onClick={()=>dispatch(editApplication(ApplicationF._id,{statutApp :  'Rejeter'}))}>Rejeter</button>
                    </div>
                     :  ApplicationF.statutApp == 'Accepter' ?
                    <div>
                        <button onClick={()=>dispatch(editApplication(ApplicationF._id,{statutApp :  'Rejeter'}))}>Rejeter</button>
                    </div> 
                    :
                    <div>
                        <button onClick={()=>dispatch(editApplication(ApplicationF._id,{statutApp :  'Accepter'}))}>Valider</button>
                    </div> 
                    }
                </div>
                
            }
            
        </div>
    )
}
export default ApplicationPro