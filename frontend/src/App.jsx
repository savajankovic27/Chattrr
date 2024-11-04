import Login from "./pages/login/Login";
import './App.css'
import SignUp from "./pages/signup/SignUp"
import Home from "./pages/home/Home";
import {Navigate, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext";
import { BiNavigation } from "react-icons/bi";

// addition of protected routes. Logout next
function App() {
  const {authUser}  = useAuthContext();
  return (
    <div className = 'p-4 h-screen flex items-center justify-center'>
      <Routes> 
       <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/>} />
       <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login/>}/>
       <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp/>}/> 
      </Routes>
      <Toaster />
    </div>
  )
}
// if the user is authenticated, takes to the next supported page. If not, it stays there. 

export default App;
