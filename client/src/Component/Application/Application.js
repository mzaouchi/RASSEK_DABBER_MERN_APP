import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { editApplication } from '../../Redux/Actions/ApplicationAction'
import { getOneUser } from '../../Redux/Actions/UserAction'


function Application({el}){

    const dispatch = useDispatch()
    
    const UsersF = useSelector(state=>state.UserReducer.users)

    const c = UsersF.find(user=> el && user._id == el.userId)

    return(
        <div style={{display:'flex',flexDirection:'column', borderBottom: '1px solid rgba(0, 0, 0, 0.5)',width:'900px'}}>
            
                {
                   c &&
                   <div>

                    
                    <div style={{display:'flex', alignItems : 'center',justifyContent:'space-between'}}>   
                        
                        <img src={`http://localhost:5000/${c.pic}`} alt='' style={{border:'groove',borderRadius :'50%',width:'100px',height:'100px'}}/>
                        
                        <div>
                        <Link to={`/UserProfile/${el._id}`} onClick={()=>dispatch(getOneUser(c._id))} style={{textDecoration:'none'}}><h3>{c.name}</h3></Link>
                            <h3>{c.role}&nbsp;{c.profession}</h3>
                        </div>
                        
                        <div>
                            <h3>Référence de la demande : {el.referenceApp}</h3>
                            <h3>Demande faite le : {el.dateApp}</h3>
                        </div>
                        
                        <div>
                            {
                                el.statutApp == 'En cours de traitement' ?
                                <h3 style={{color : 'orange'}}>Status : {el.statutApp}</h3>
                                :el.statutApp == 'Accepter'?
                                <h3 style={{color : 'green'}}>Status : {el.statutApp}</h3>
                                :
                                <h3 style={{color : 'red'}}>Status : {el.statutApp}</h3>

                            }
                             
                    
                            {el.statutApp == 'En cours de traitement' ? 
                            <div>
                                <button onClick={()=>dispatch(editApplication(el._id,{statutApp :  'Accepter'}))}>Valider</button>
                                <button onClick={()=>dispatch(editApplication(el._id,{statutApp :  'Rejeter'}))}>Rejeter</button>
                            </div>
                            :  el.statutApp == 'Accepter' ?
                            <div>
                                <button onClick={()=>dispatch(editApplication(el._id,{statutApp :  'Rejeter'}))}>Rejeter</button>
                            </div> 
                            :
                            <div>
                                <button onClick={()=>{dispatch(editApplication(el._id,{statutApp :  'Accepter'}))}}>Valider</button>
                            </div> 
                            }
                        
                        </div>
                    </div>

                </div>
               }
           
                
            
        </div>
    )
}
export default Application