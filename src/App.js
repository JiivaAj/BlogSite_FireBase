
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom";
import Home from "./screens/home/Home";
import Createpost from "./screens/create/Createpost";
import Postdetail from "./screens/postdetail/Postdetail";
import Editpost from "./screens/edit/Editpost"
import Themeswitch from "./component/navbar/switch/Themeswitch";
import './Apps.css'
import useThemeContext from "./hookss/useThemeContext";
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";
import useAuthContext from "./hookss/useAuthContext";


function App() {

  const {theme} = useThemeContext()
  const {user,isAuthReady} = useAuthContext()

  return (
    <div className= {`App ${theme}bg`}>
      <BrowserRouter>
        <Navbar />
        <Themeswitch/>
        <div className="container">
        {isAuthReady && <Routes>
           <Route path="/" element={user ? <Home/> : <Navigate to='/login'/>}/>
           <Route path="/create" element={user ? <Createpost/> : <Navigate to='/login'/>}/>
           <Route path="/postss/:id" element={user ? <Postdetail/> : <Navigate to='/login'/>}/>
           <Route path="/edit/:id" element={user ? <Editpost/>: <Navigate to='/login'/>}/>
           <Route path="/login" element={!user ? <Login/>: <Navigate to='/'/>}/>
           <Route path="/signup" element={!user ? <Signup/> : <Navigate to='/'/>}/>
        </Routes>}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
