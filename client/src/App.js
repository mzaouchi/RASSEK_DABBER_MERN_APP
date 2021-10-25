import './App.css';
import Navbar from './Component/NavBarG/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import Signup from './Component/Register/SignUp';
import PrivateRoute from './PrivateRoutes/PrivateRoute'
import PostsLists from './Component/PostsList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from './Redux/Actions/AuthAction';
import MyPostsLists from './Component/MyPostsLists';
import Register from './Component/Register/Register';
import Profile from './Component/Profile/Profile';
import EditProfile from './Component/Profile/EditProfile';
import CreatePost from './Component/posts/createPosts';
import Post from './Component/posts/Post';
import EditPost from './Component/posts/EditPost';
import ApplicationPro from './Component/Application/ApplicationPro';
import UsersList from './Component/Users/UsersList';
import UserProfile from './Component/Users/UserProfile';
import EditUserProfile from './Component/Users/EditUserProfile';
import MyApplicationsList from './Component/MyApplicationsList';


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(current())
  })

  return (
    <div className='myApp'>
      
      <div>
          <Navbar/>

          <Switch>
              <Route exact path='/' component={Home}/>
              <Route  path='/SignIn' component={Register}/> 
              <Route  path='/SignUp' component={Signup}/>
              <PrivateRoute path='/Profile' component={Profile}/>
              <PrivateRoute path='/EditProfile' component={EditProfile}/>
              <PrivateRoute path='/AddNewPost' component={CreatePost}/>
              <PrivateRoute path='/AllPosts' component={PostsLists}/>
              <PrivateRoute path='/MyPosts' component={MyPostsLists}/>     
              <PrivateRoute path='/Posts/:id' component={Post}/>    
              <PrivateRoute path='/EditPost/:id' component={EditPost}/>    
              <PrivateRoute path='/ApplicationPost/:id' component={ApplicationPro}/>   
              <PrivateRoute path='/Users' component={UsersList}/>   
              <PrivateRoute path='/UserProfile/:id' component={UserProfile}/>    
              <PrivateRoute path='/EditUserProfile/:id' component={EditUserProfile}/>  
              <PrivateRoute path='/MyApplications' component={MyApplicationsList}/>    
          </Switch>
      </div>
 
    </div>
  );
}

export default App;


