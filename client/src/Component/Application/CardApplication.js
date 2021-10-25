import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getPostApplication } from "../../Redux/Actions/ApplicationAction";
import { getOnepost } from "../../Redux/Actions/PostAction";
import { getOneUser } from "../../Redux/Actions/UserAction";

function CardApplication({el}){
    const Posts = useSelector(state => state.PostReducer.Posts)
    const PostToFind = Posts.find(Post=>el&& Post._id == el.postId)
    const dispatch = useDispatch()
    return(
        <div>
          
            {
                PostToFind&&
            
                    <div className="project-card">
                            
                            <h3>{PostToFind.title}</h3>
                           
                            <div className='project-card-PartM'>

                                <div className='project-card-Part'>
                                    <h5>Référence :</h5>                   
                                    <h5> &nbsp; &nbsp;{el.referenceApp}</h5>
                                </div>

                                <div className='project-card-Part'>
                                    <h5>Date de la demande :</h5>   
                                    <h5>&nbsp; &nbsp;{el.dateApp}</h5>
                                </div>
                                
                                <div className='project-card-Part'> 
                                    <h4>Staut :&nbsp;</h4>
                                    {
                                                el.statutApp == 'En cours de traitement' ?
                                                <h4 style={{color : 'orange'}}>{el.statutApp}</h4>
                                                :el.statutApp == 'Accepter'?
                                                <h4 style={{color : 'green'}}>{el.statutApp}</h4>
                                                :
                                                <h4 style={{color : 'red'}}>{el.statutApp}</h4>

                                            }
                                </div>

                                </div>

                            
                            <Link to={`/Posts/${PostToFind._id}`} onClick={()=>{dispatch(getOnepost(PostToFind._id));dispatch(getPostApplication(PostToFind._id));dispatch(getOneUser(PostToFind.userId))}} >Plus de détails sur l'offre</Link>
                            
                        </div>
                
            }
    </div>
    )
}

export default CardApplication