import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { addOnePost } from '../../Redux/Actions/PostAction'

function CreatePost(){

const history = useHistory()
const dispatch = useDispatch()

const [titleP,setTitleP] = useState('')
const [descriptionP,setDescriptionP] = useState('')
const [adresseP,setAdresseP] = useState('')
const [remunierationP,setRemunierationP] = useState('')
const [durationP,setDurationP] = useState('')
const [dateJobP,setDateJobP] = useState('')
const [domainP,setDomainP] = useState('')

    return(
      
        <section id="contact">
                            <h2 className="text-important">Créer un nouveau post</h2>
                            <form encType="multipart/form-data">
                                <label>Titre</label><br/>
                                <input value={titleP} type='text' onChange={(e)=>setTitleP(e.target.value)}/><br/>
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
                                <label>Rémuniération</label><br/>
                                <input value={remunierationP} type='text' onChange={(e)=>setRemunierationP(e.target.value)}/><br/>
                                <label>Date du début</label><br/>
                                <input type='datetime-local' value={dateJobP} onChange={(e)=>setDateJobP(e.target.value)} /><br/>
                                
                                <label>Durée</label><br/>
                                <input value={durationP} type='email' onChange={(e)=>setDurationP(e.target.value)}/><br/>
                                <label>Profession</label><br/>
                                <select value={domainP} onChange={(e)=>setDomainP(e.target.value)}>
                                                <option value="none">
                                                    Selectionne une option
                                                </option>
                                                <option value="IT">IT</option>
                                                <option value="Agriculture">Agriculture</option>
                                            </select><br/>
                                <label>Description</label><br/>
                                <input value={descriptionP} type='text' onChange={(e)=>setDescriptionP(e.target.value)}/><br/>
                                <button  onClick={(e)=>{e.preventDefault();dispatch(addOnePost({title : titleP, description : descriptionP, adresse : adresseP,remunieration : remunierationP,duration  : durationP,dateJob : dateJobP, domain : domainP}));history.push('/MyPosts')}}>Ajouter</button><br/>
                            </form>
                        </section>
     
    )
}

export default CreatePost