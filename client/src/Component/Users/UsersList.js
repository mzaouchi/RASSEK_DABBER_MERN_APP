import { useSelector } from "react-redux"
import UsersCard from "./UsersCard"

function UsersList(){
    const users = useSelector(state=>state.UserReducer.users)
    return(
        <div>
            <section id="projects">
            <h2 className="text-important">Tous les utilisateurs</h2>
            <div className="projects-container">
            {users &&
                users.map(el => <UsersCard key={el._id} el = {el}/>)
            }
            </div>
            </section>
        </div>
    )
}

export default UsersList