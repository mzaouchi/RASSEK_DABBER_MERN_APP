import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../Redux/Actions/AuthAction"
import { getallposts, getmyposts } from "../../Redux/Actions/PostAction"
import { getallUsers } from "../../Redux/Actions/UserAction"
import { getallApplications, getmyApplications } from "../../Redux/Actions/ApplicationAction"



function Navbar(){
    
    const user = useSelector(state=>state.AuthReducer.user)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    

   
        return(
               
         <header>
            <img src='/DabberRassek.png' alt='' style={{width:'200px'}}/>
            <ul className="navmenu">
                <li><Link to='/' className="navLink" onClick={()=>dispatch(getallApplications())}>Accueil</Link></li>
               {    
                   token ?
                   <>
                   {
                       user &&
                       <>
                        {user.role == "Recruteur"?
                       <>
                           <li><Link to='/Profile' className="navLink">Profile</Link></li>
                           <li><Link to='/MyPosts' className="navLink" onClick={()=>dispatch(getmyposts())}>Mes poste</Link></li>
                           <li><Link to='/AllPosts' className="navLink" onClick={()=>{dispatch(getallposts());dispatch(getallUsers())}}>Postes</Link></li>
                           <li><Link to='/AddNewPost' className="navLink">Ajouter un poste</Link></li>
                           <li><Link to='/SignIn' className="navLink" onClick={()=>{dispatch(logout())}}>Déconnexion</Link></li>
                       </>
                       :token && user.role == "Employer"?
                       <>
                           <li><Link to='/Profile' className="navLink">Profile</Link></li>
                           <li><Link to='/MyApplications' className="navLink" onClick={()=>{dispatch(getmyApplications()); dispatch(getallposts())}}>Mes demandes</Link></li>
                           <li><Link to='/AllPosts' className="navLink" onClick={()=>{dispatch(getallposts());dispatch(getallUsers())}}>Postes</Link></li>
                           <li><Link to='/SignIn' className="navLink" onClick={()=>{dispatch(logout())}}>Déconnexion</Link></li>
                       </>
                       :
                       <>
                           <li><Link to='/Profile' className="navLink">Profile</Link></li>
                           <li><Link to='/MyPosts' className="navLink" onClick={()=>dispatch(getmyposts())}>Mes poste</Link></li>
                           <li><Link to='/MyApplications' className="navLink" onClick={()=>{dispatch(getmyApplications()); dispatch(getallposts())}}>Mes demandes</Link></li>
                           <li><Link to='/AllPosts' className="navLink" onClick={()=>{dispatch(getallposts());dispatch(getallUsers())}}>Postes</Link></li>
                           <li><Link to='/AddNewPost' className="navLink">Ajouter un poste</Link></li>
                           <li><Link to='/Users' className="navLink" onClick={()=>dispatch(getallUsers())}>Les utilisateurs</Link></li>
                           <li    onClick={()=>{dispatch(logout())}} ><Link to='/SignIn' className="navLink">Déconnexion</Link></li>  
                       </>}
                       </>
                      
                   }
                   </>
                   :
                   <>
                       <li><Link to='/' className="navLink">Comment ça marche</Link></li>
                       <li><Link to='/' className="navLink">A quoi ça ressemble</Link></li>
                       <li><Link to='/SignIn' className="navLink">Se connecter</Link></li>
                   </>
               }
                    
                    
            </ul>
         </header>
    
    )
}

export default Navbar