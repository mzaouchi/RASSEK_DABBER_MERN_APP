import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { deleteUser, getOneUser } from "../../Redux/Actions/UserAction"
import { Link } from 'react-router-dom'
import { IconButton } from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useEffect, useState } from "react";

function UserProfile(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state=>state.UserReducer.user)
    const userRole = useSelector(state=>state.AuthReducer.user)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    useEffect(()=>{
        
        dispatch(getOneUser(id))
              
    })

    const [showC, setShowC] = useState(false);

       
   return(
       
        <>
                                   {
                                       userRole.role=="Administrateur" &&
                                       <div>
                                           {user  && 
                                <div>
                                    <button className='dotMenu' onClick={handleClick}>
                                        ...
                                    </button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                       
                                        <Link to= {`/EditUserProfile/${user._id}`}  ><MenuItem onClick={()=>{}}>
                                        <IconButton  onClick={()=>setShowC(!showC)} >
                                            <img className='iconMod'src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" alt=''/>
                                                                                       
                                        </IconButton>
                                        </MenuItem></Link>
                                        <Link to= '/Users'  onClick={()=> dispatch(deleteUser(user._id))} ><MenuItem onClick={()=>{}}>
                                        <IconButton  onClick={()=>setShowC(!showC)} >
                                        <img className='iconMod' src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png"  alt=''/>
                                            
                                        </IconButton>
                                        </MenuItem></Link>
                                        
                                    </Menu>
                                </div> } 
                                       </div>
                                   }
                                
                    
    {   user &&
    
        <section id="about-me" >


            
            <div className="info-avatar">
            
                <h1>Infos</h1>
                <h2>{user.description}</h2>
                <h1>Coordonnées</h1>
                <div className="CordAvatar">
                <div className="CordAvatarEnt">
                <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt=''/>
                <p>Téléphone</p>
                <p>{user.phone}</p>
                </div>
                <div className="CordAvatarEnt">
                <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt=''/>
                <p>E-mail</p>
                <p>{user.email}</p>
                </div>
                <div className="CordAvatarEnt">
                <img src="https://img.icons8.com/ios/50/000000/giving-birth.png" alt=''/>
                <p>Anniversaire</p>
                <p>{user.birth}</p>
                </div>
                </div>
            </div>
            
            <div className="avatar-profile">
                <h1>{user.role} {user.profession}</h1>
                <img className="avatar" src={`http://localhost:5000/${user.pic}`} alt="" />
                <h2>{user.name}</h2>
                <h2>{user.adresse}</h2>
                
            </div>
        </section>
    } 
    
    
    </>       
    )
}

export default UserProfile