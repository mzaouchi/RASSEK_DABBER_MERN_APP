import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getallposts } from "../Redux/Actions/PostAction"
import { getallUsers } from "../Redux/Actions/UserAction"
import CardAllPost from "./posts/CardAllPost"

function PostsLists(){
    
    const dispatch = useDispatch()
    const Posts = useSelector(state=>state.PostReducer.Posts)
    const UsersT = useSelector(state=>state.UserReducer.users)

    const [titleP,setTitleP] = useState('')
    const [adresseP,setAdresseP] = useState('none')
    const [domainP,setDomainP] = useState('none')
   
    useEffect(()=>{
        dispatch(getallUsers())
        dispatch(getallposts())
       
    })
    return(
        <div>
            {UsersT &&
            <div>
                
            <section id="projects">
            <h2 className="text-important">Les offres</h2>
            <div style={{display:'flex',justifyContent:'space-between',margin:'auto', width:'500px'}}>
            
            
            <input value={titleP} type='text' placeholder='Que recherchez vous ?' onChange={(e)=>{setTitleP(e.target.value)}} style={{borderColor: 'rgb(255, 205, 0)',height: '31px'}}/><br/>
            <select value={adresseP} onChange={(e)=>{setAdresseP(e.target.value)}} style={{borderColor: 'rgb(255, 205, 0)',height: '31px'}}>
                                                <option  value="none" >
                                                Toute la Tunisie
                                                </option>
                                                <option value="Ariana">Ariana</option>
                                                <option value="Béja">Béja</option>
                                                <option value="Ben Arous">Ben Arous</option>
                                                <option value="Bizerte">Bizerte</option>
                                                <option value="Gabès">Gabès</option>
                                                <option value="Gafsa">Gafsa</option>
                                                <option value="Jendouba">Jendouba</option>
                                                <option value="Kairouan">Kairouan</option>
                                                <option value="Kasserine">Kasserine</option>
                                                <option value="Kébili">Kébili</option>
                                                <option value="Le Kef">Le Kef</option>
                                                <option value="Mahdia">Mahdia</option>
                                                <option value="La Manouba">La Manouba</option>
                                                <option value="Médenine">Médenine</option>
                                                <option value="Monastir">Monastir</option>
                                                <option value="Nabeul">Nabeul</option>
                                                <option value="Sfax">Sfax</option>
                                                <option value="Sidi Bouzid">Sidi Bouzid</option>
                                                <option value="Siliana">Siliana</option>
                                                <option value="Sousse">Sousse</option>
                                                <option value="Tataouine">Tataouine</option>
                                                <option value="Tozeur">Tozeur</option>
                                                <option value="Tunis">Tunis</option>
                                                <option value="Zaghouan">Zaghouan</option>
                                            </select> <br/>
                                            <select value={domainP} onChange={(e)=>{setDomainP(e.target.value)}} style={{borderColor: 'rgb(255, 205, 0)',height: '31px'}}>
                                                <option value="none">
                                                Tous les domaines
                                                </option>
                                                <option value="IT">IT</option>
                                                <option value="Agriculture">Agriculture</option>
                                            </select><br/>
         
            </div>
                
            {Posts && 
                <div className="projects-container">
                    
                   {

                    Posts.length == 0 ? 
                            <h1>Aucun poste</h1>
                            :
                            <>
                                {Posts.filter(el => el.title.toUpperCase().includes(titleP.toUpperCase())).filter(el=> adresseP != "none" ? el.adresse==adresseP : el).filter(el=> domainP != "none" ? el.domain==domainP : el).map(el=><CardAllPost key={el._id} el = {el} userPost ={UsersT.find(user=>user._id == el.userId)}/>).length>0 ? 
                                Posts.filter(el => el.title.toUpperCase().includes(titleP.toUpperCase())).filter(el=> adresseP != "none" ? el.adresse==adresseP : el).filter(el=> domainP != "none" ? el.domain==domainP : el).map(el=><CardAllPost key={el._id} el = {el} userPost ={UsersT.find(user=>user._id == el.userId)}/>) :
                                 <h1>Aucun poste qui correspant à vous critére</h1>
                                }
                            </>
}
                </div>}
            </section>   
           </div>
            }
       
        </div>
    )
}

export default PostsLists