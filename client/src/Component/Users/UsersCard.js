import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getOneUser } from '../../Redux/Actions/UserAction'
function UsersCard({el}){
    const dispatch = useDispatch()
    return(
        <div>
            <div className="project-card">
                    <div className='des-project-card'>
                        < img src={el.pic} alt='' className='imgP-project-card' />
                        <div style={{marginLeft:'10px'}}>
                        <h2>{el.name}</h2>
                        <h4>{el.role}&nbsp;{el.profession}</h4>
                        </div>
                    </div>
           
                  <div className='project-card-PartM'>
                        <div className='project-card-Part'>
                        <img src="https://img.icons8.com/ios/50/000000/worldwide-location.png" alt='' className='icon-project-card'/>
                        
                        <h4> &nbsp; &nbsp;{el.adresse}</h4>
                        </div>
                        <div className='project-card-Part'>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/email.png" alt='' className='icon-project-card'/>
                        <h4>&nbsp; &nbsp;{el.email}</h4>
                        </div>
                        <div className='project-card-Part'> 
                        <img src="https://img.icons8.com/ios/50/000000/giving-birth.png" alt='' className='icon-project-card'/>
                        <h4>&nbsp; &nbsp;{el.birth}</h4>
                        </div>
                  </div>
            <Link to={`/UserProfile/${el._id}`} onClick={()=>dispatch(getOneUser(el._id))}>Plus de détails</Link>
            </div>
        </div>
    )
}

export default UsersCard