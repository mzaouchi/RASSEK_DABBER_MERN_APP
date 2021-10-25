import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router"
import "./style.scss";
import { register } from "../../Redux/Actions/AuthAction";

function SignUp() {
  const [roleU,setRoleU] = useState('Employer')
  const [regEmail,setRegEmail] = useState('')
  const [regPassword,setRegPassword] = useState('')
  const dispatch = useDispatch();
  const history = useHistory();
 
  return (
    
    <div>
      <section id="contact">
                      <h2 className="text-important">Créer un compte</h2>
                      <div className="switch-button">
                            <input className="switch-button-checkbox" type="checkbox" onChange={(e)=>{e.target.checked ? setRoleU('Recruteur') : setRoleU('Employer')}}></input>
                            <label className="switch-button-label" for="" ><span className="switch-button-label-span" >Employer</span></label>
                          </div>
                      <form>
                          
                          <label>Email</label><br/>
                          <input type="email" placeholder="Email" onChange={(e)=>setRegEmail(e.target.value)}/><br/>
                          <label>Mot de passe</label><br/>
                          <input type="password" placeholder="Mot de passe" onChange={(e)=>setRegPassword(e.target.value)}/><br/>
                          <button onClick={(e)=>{e.preventDefault();dispatch(register({email:regEmail,password:regPassword,role:roleU},history))}}>Commencer</button><br/>
                          <h3>Non enregistré?  <Link to='/SignIn' id="LinkText">Se connecter</Link></h3>
                      </form>
                  </section>
    </div>
  );
}
export default SignUp;
