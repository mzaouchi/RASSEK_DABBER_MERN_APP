import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router"
import { clearerrors, login } from "../../Redux/Actions/AuthAction";

function Register() {
  const [regEmail,setRegEmail] = useState('')
    const [regPassword, setRegPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    
  return (
    <div>

                   <section id="contact">
                      <h2 className="text-important">Connectez-vous à votre compte</h2>
                      <form>
                          <label>Email</label><br/>
                          <input type="email" placeholder="Email" onChange={(e)=>{setRegEmail(e.target.value);dispatch(clearerrors())}} /><br/>
                          <label>Mot de passe</label><br/>
                          <input type="password" placeholder="Password" onChange={(e)=>{setRegPassword(e.target.value);dispatch(clearerrors())}}/><br/>
                          <button onClick={(e)=>{e.preventDefault();dispatch(login({email : regEmail,password : regPassword},history))}}>Commencer</button><br/>
                          <h3>Non enregistré?  <Link to='/SignUp' id="LinkText">Créer un compte</Link></h3>
                      </form>
                  </section>
    </div>
  );
}
export default Register;
