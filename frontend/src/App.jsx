import Login from "./pages/login/Login";
import './App.css'
import SignUp from "./pages/signup/SignUp"
import Home from "./pages/home/home";
import Toaster from 'react-hot-toast';

function App() {
  return (
    <div className = 'p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path ='/' element = {<Home/>} />
        <Route path ='/login' element = {<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App;
