import { useSelector } from "react-redux"

function Profile(){
    
   

    const user = useSelector(state=>state.AuthReducer.user)
    
    return(
      
        <div>
          {user&&user.email}
          <div class="containerFUP">
          <form className = "formUP">

          <p>{user&&user.email}</p>
          
            </form>
            </div>
        </div>
    )
}

export default Profile