import Login from "./pages/login/Login";
import {Route, Routes} from 'react-router-dom';
import './App.css'
import SignUp from "./pages/signup/SignUp"
import Home from "./pages/home/home";

function App() {
  return (
    // The introduction of routes will enable the user to switch between their different screens and access the chats dynamically. 
    <div className = 'p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path ='/' element = {<Home/>} />
        <Route path ='/login' element = {<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App;
