import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { editUser, getOneUser } from "../../Redux/Actions/UserAction";

function EditUserProfile(){

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state=>state.UserReducer.user)
    const [picP,setPicP] = useState('');
    const [roleP,setRoleP] = useState('');
    const [nomP,setNomP] = useState('');
    const [dateP,setDateP] = useState('');
    const [adresseP,setAdresseP] = useState('');
    const [emailP,setEmailP] = useState('');
    const [phoneP,setPhoneP] = useState('');
    const [professionP,setProfessionP] = useState('');
    const [descriptionP,setDescriptionP] = useState('');


    useEffect(() => {
       if(user){
        setPicP(user.pic);
        setRoleP(user.role)
        setNomP(user.name);
        setDateP(user.birth);
        setAdresseP(user.adresse)
        setEmailP(user.email)
        setPhoneP(user.phone)
        setProfessionP(user.profession)
        setDescriptionP(user.description)
       }
      },[]);
    return(
    
    <div>
           
                  {user &&
                        <section id="contact">
                            <h2 className="text-important">Modifier le compte de : {user.name}</h2>
                            <form enctype="multipart/form-data">
                                <label>Photo</label><br/>
                                <input type="file"   onChange={(e)=>setPicP(e.target.files[0]) } accept= "image/*"   /><br/>
                                <label>Nom</label><br/>
                                <input value={nomP} type='text' onChange={(e)=>setNomP(e.target.value)}/><br/>
                                <label>Date de naissance</label><br/>
                                <input type="date" value={dateP}  onChange={(e)=>setDateP(e.target.value)}/><br/>
                                <label>Adresse</label><br/>
                                <select value={adresseP} onChange={(e)=>setAdresseP(e.target.value)}>
                                                <option value="none">
                                                    Selectionne une option
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
                                <label>Email</label><br/>
                                <input value={emailP} type='email' onChange={(e)=>setEmailP(e.target.value)}/><br/>
                                <label>Téléphone</label><br/>
                                <input  type='text' value={phoneP} onChange={(e)=>setPhoneP(e.target.value)}/><br/>
                                <label>Profession</label><br/>
                                <select value={professionP} onChange={(e)=>setProfessionP(e.target.value)}>
                                                <option value="none">
                                                    Selectionne une option
                                                </option>
                                                <option value="IT">IT</option>
                                                <option value="Agriculture">Agriculture</option>
                                            </select><br/>
                                <label>Infos</label><br/>
                                <input value={descriptionP} type='text' onChange={(e)=>setDescriptionP(e.target.value)}/><br/>
                                <button  onClick={(e)=>{dispatch(editUser(user._id,{name : nomP,adresse : adresseP,email : emailP,phone : phoneP,profession : professionP,birth : dateP , userImage : picP,description : descriptionP}));dispatch(getOneUser(user._id)); history.push(`/UserProfile/${user._id}`)}}>Modifier</button><br/>
                            </form>
                        </section>
                  }  
                  
        </div>
    )
}

export default EditUserProfile