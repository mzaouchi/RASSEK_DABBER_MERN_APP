import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { addApplication, getPostApplication } from "../../Redux/Actions/ApplicationAction";
import { deletePost, getOnepost } from "../../Redux/Actions/PostAction";
import Application from "../Application/Application";
import { IconButton } from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { getallUsers, getOneUser } from "../../Redux/Actions/UserAction";

function Post(){
    
    const {id} = useParams()    
    const dispatch = useDispatch();
    const Post = useSelector(state=>state.PostReducer.Post)
    const user = useSelector(state=>state.AuthReducer.user)
    const userPost = useSelector(state=>state.UserReducer.user)
    const ApplicationPost = useSelector(state=>state.ApplicationReducer.PostApplication)
    
    

    useEffect(()=>{
        
        if(id){
            console.log(id)
            dispatch(getOnepost(id))
            dispatch(getPostApplication(id))
            dispatch(getallUsers())
            if(Post)
            dispatch(getOneUser(Post.userId))
        }
        
              
    },[])
    useEffect(()=>{
        if(Post)
        dispatch(getPostApplication(Post._id))
              
    },[ApplicationPost])
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    

    const [showC, setShowC] = useState(false);


    return(
        <div>
            {
                (userPost&&Post&&user&&ApplicationPost) &&
                
                <div>
                    <section id="contact">
                    {   
                   ( user._id == Post.userId  || user.role == "Administrateur")&& 
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
                                         
                                        <Link to={`/EditPost/${Post._id}`}  ><MenuItem onClick={()=>dispatch(getOnepost(Post._id))}>
                                        <IconButton  onClick={()=>setShowC(!showC)} >
                                            <img className='iconMod'src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" alt=''/>
                                                                                       
                                        </IconButton>
                                        </MenuItem></Link>
                                        <Link to= '/AllPosts'  onClick={()=>dispatch(deletePost(Post._id))} ><MenuItem onClick={()=>{}}>
                                        <IconButton  onClick={()=>setShowC(!showC)} >
                                        <img className='iconMod' src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png" alt='' />
                                            
                                        </IconButton>
                                        </MenuItem></Link>
                                        
                                    </Menu>
                                </div>
                    }
                <div>
                    
                    

                    <h1>Post publier par :</h1>
                    <div className='desPost-project-card' >
                    
                        
                        <div className='desPostCord-project-card' style={{marginLeft:'10px'}}>
                        <img src={`http://localhost:5000/${userPost.pic}`} className='imgPost-project-card' alt='' />
                        <div style={{marginLeft :'30px'}}>
                        <h2>{userPost.name}</h2>
                        <h3>{userPost.role}&nbsp;{userPost.profession}</h3>
                        </div>
                        </div>
                        <div style={{marginLeft:'10px'}}>
                            <div className='project-card-Part'>
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/email.png" className='icon-project-card' alt=''/>
                                <p>&nbsp; &nbsp;{userPost.email}</p>
                            </div>
                            <div className='project-card-Part'>
                                <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" className='icon-project-card' alt=''/>
                                <p>&nbsp; &nbsp;{userPost.phone}</p>
                            </div>
                        
                        </div>
                        
                    </div>
                   
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <h1>{Post.title}</h1>
                    <div>
                    <h4>Référence du poste : {Post.referenceOffre}</h4>
                    <h4>Modifier le : {Post.dateOffre} </h4>
                    </div>
                </div>    
                
                <h2>Détails du poste</h2><br/>
                        <div className="CordAvatar">
                            <div className="CordAvatarEnt">
                            <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt=''/>
                            <p>Domain</p>
                            <p>{Post.domain}</p>
                            </div>
                            <div className="CordAvatarEnt">
                            <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt=''/>
                            <p>Adresse</p>
                            <p>{Post.adresse}</p>
                            </div>
                            <div className="CordAvatarEnt">
                            <img src="https://img.icons8.com/windows/50/000000/pay-date.png" alt=''/>
                            <p>Date du début</p>
                            <p>{Post.dateJob}</p>
                            </div>
                            <div className="CordAvatarEnt">
                            <img src="https://img.icons8.com/ios/50/000000/date-to.png" alt=''/>
                            <p>Durée</p>
                            <p>{Post.duration}</p>
                            </div>
                            <div className="CordAvatarEnt">
                            <img src="https://img.icons8.com/ios/50/000000/yandex-money.png" alt=''/>
                            <p>Rémuniération</p>
                            <p>{Post.remunieration}</p>
                            </div>
                        </div>
                
                <h2>Description complète du poste</h2>
                <p style={{marginLeft:'20px',width:'1000px'}}>{Post.description}</p>

                <div>
                    
                {   
                    user._id == Post.userId ? 
                        <div>
                            <h1>Les demandes : </h1>
                            {
                                ApplicationPost.length == 0 ? 
                                <h2>Acune demande n'est encore faite</h2>
                                :
                                <div>
                                {ApplicationPost.map(el=> <div key={el._id} style={{display:'flex',justifyContent:'center'}}><Application  el={el}/></div>)}
                                </div>
                            } 
                            
                        </div>
                        :
                        <div >
                        {ApplicationPost.find(el=> el.userId == user._id) ? 
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                                <h1 style={{color:'green'}}>Vous avez déja postulez</h1>
                                
                            </div> :
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                                <button onClick={()=>{dispatch(addApplication(Post._id));dispatch(getPostApplication(Post._id))}} style={{backgroundColor:'green'}}>Postuler</button>
                            </div>}
                        </div>
                    }    
                </div>
                
                </div>
             
                </section>
                </div>
                
            }
           
        </div>
    )
}

export default Post