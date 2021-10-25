// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useParams } from "react-router"
// import { editUser, EditUserr, getallUsers } from "../Redux/Actions/UserAction"

// function Edit(){
//     const {id}=useParams()
//     const [name,setName]=useState('')
//     const [email,setemail]=useState('')
// const dispatch=useDispatch()
// const user = useSelector(state=>state.AuthReducer.user)
// console.log(user)
// return(
//         <div  encType="multipart/form-data">
//             <input  value={email}   onChange={(e)=>setemail(e.target.value)} />
//             <h1>Mahmoud</h1>
//             <h1>Mahmoud</h1>
//             <h1>Mahmoud</h1>
//             <h1>Mahmoud</h1>
//             <h1>Mahmoud</h1>
            
//              {/* <input value={email}    onChange={(e)=>setName(e.target.value)} /> */}
//           <button  style={{backgroundColor:"white", marginTop:"20px"}}    onClick={()=>dispatch(EditUserr(id, {email}))} >ok </button> 
         
//         </div>
//     )
// }
// export default Edit