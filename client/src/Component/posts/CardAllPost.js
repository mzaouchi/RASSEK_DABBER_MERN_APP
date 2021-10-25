import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPostApplication } from '../../Redux/Actions/ApplicationAction'
import { getOnepost } from '../../Redux/Actions/PostAction'
import { getallUsers, getOneUser } from '../../Redux/Actions/UserAction'

function CardAllPost({el,userPost}){

    const dispatch= useDispatch()
  
    return(
        <div>
            
                <div className="project-card">
                    <div className='des-project-card'>
                    <   img src={userPost.pic} alt='' className='imgP-project-card'/>
                        <div style={{marginLeft:'10px'}}>
                        <h2>{userPost.name}</h2>
                        <h4>{userPost.role}&nbsp;{userPost.profession}</h4>
                        </div>
                    </div>
                  
                  
                  <h3>{el.title}</h3>
                  <div className='project-card-PartM'>
                  <div className='project-card-Part'>
                  <img src="https://img.icons8.com/ios/50/000000/worldwide-location.png" alt='' className='icon-project-card'/>
                 
                  <h4> &nbsp; &nbsp;{el.adresse}</h4>
                  </div>
                  <div className='project-card-Part'>
                  <img src="https://img.icons8.com/ios/50/000000/time--v1.png" alt='' className='icon-project-card'/>
                  <h4>&nbsp; &nbsp;{el.dateJob}</h4>
                  </div>
                  <div className='project-card-Part'> 
                  <img src="https://img.icons8.com/ios/50/000000/job.png" alt='' className='icon-project-card'/>
                  <h4>&nbsp; &nbsp;{el.domain}</h4>
                  </div>
                  </div>

                  
                  <Link to={`/Posts/${el._id}`} onClick={()=>{dispatch(getOnepost(el._id));dispatch(getPostApplication(el._id));dispatch(getallUsers());dispatch(getOneUser(el.userId))}} >Plus de détails sur l'offre</Link>
                  
              </div>
              
            
      
  
              </div>    
                  
    )
}

export default CardAllPost