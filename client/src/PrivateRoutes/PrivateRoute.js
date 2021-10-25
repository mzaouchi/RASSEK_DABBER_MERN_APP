import { Redirect, Route } from "react-router-dom"

const PrivateRoute=({component,...rest})=>{
    const token = localStorage.getItem('token')
    console.log(rest)
    return(
        <div>
            {token ? <Route component = {component} {...rest}/> : <Redirect to='/SignIn'/>}
            
        </div>
    )
}

export default PrivateRoute