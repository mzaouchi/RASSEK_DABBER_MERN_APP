import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getmyposts } from "../Redux/Actions/PostAction"
import CardPost from "./posts/CardPost"

function MyPostsLists(){

    const dispatch = useDispatch()
    const myPosts = useSelector(state => state.PostReducer.MyPosts)
    useEffect(()=>{
        dispatch(getmyposts())
       
    })
    return(
        <div>
            <section id="projects">
            <h2 className="text-important">Mes posts</h2>
            {myPosts && 
                <div className="projects-container">
                    {
                        myPosts.length == 0 ? 
                            <h1>Vous n'avez pas encore ajouter aucun post</h1>
                            :
                            myPosts.map(el=><CardPost key={el._id} el = {el}/>)
                    }
                </div>
           }
            </section>
        </div>
    )
}

export default MyPostsLists