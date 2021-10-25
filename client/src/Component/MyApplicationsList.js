import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getmyApplications } from "../Redux/Actions/ApplicationAction"
import { getallposts } from "../Redux/Actions/PostAction"
import CardApplication from "./Application/CardApplication"

function MyApplicationsList(){

    const dispatch = useDispatch()
    const myApplications = useSelector(state => state.ApplicationReducer.MyApplications)
    const [filterS,setFilterS] = useState('none')
   

    useEffect(()=>{
        dispatch(getmyApplications())
        dispatch(getallposts())
       
    })
    return(
        <div>
            
            <div>
            <section id="projects">
            <h2 className="text-important">Mes demandes</h2>
            <div >
            <select value={filterS} onChange={(e)=>setFilterS(e.target.value)} style={{borderColor: 'rgb(255, 205, 0)',height: '31px',marginLeft:'670px'}}>
                                                <option value="none">
                                                    Toutes les demandes
                                                </option>
                                                <option value="En cours de traitement">En cours de traitement</option>
                                                <option value="Accepter">Accepter</option>
                                                <option value="Rejeter">Rejeter</option>
                                            </select><br/>
            </div>
           
            {myApplications && 
                <div className="projects-container">
                    {
                        myApplications.length == 0 ? 
                            <h1>Vous n'avez pas encore fait aucune demande</h1>
                            :
                            <>
                                {myApplications.filter(el=> filterS != "none" ? el.statutApp==filterS : el).map(el=><CardApplication key={el._id} el = {el}/>).length>0 ? 
                                 myApplications.filter(el=> filterS != "none" ? el.statutApp==filterS : el).map(el=><CardApplication key={el._id} el = {el}/>) :
                                 <h1>Aucune demande qui correspant à vous critére</h1>
                                }
                            </>
                            
                    }
                </div>
           }
            </section>
        </div>
        </div>
    )
}

export default MyApplicationsList