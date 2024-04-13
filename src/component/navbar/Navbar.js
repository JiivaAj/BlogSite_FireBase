import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useThemeContext from "../../hookss/useThemeContext";
import AppsubmitButton from "./appsubmitbutton.js/AppsubmitButton";
import useAuthentication from "../../hookss/useAuthentication";
import useAuthContext from "../../hookss/useAuthContext";

const Navbar = () => {
  const { theme } = useThemeContext();
  const {user} = useAuthContext()
  const {logout} = useAuthentication()
  const handleLogout = () => {
         logout()
  }
  return (
    <header className={`${theme}header`}>
      <div className="container">
        <Link to="/">
          <h1>Blog</h1>
        </Link>
        <nav>
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/create">
            <h4>Create Post</h4>
          </Link>
          {!user && <Link to="/login">
            <h4>Login</h4>
          </Link>}
          {!user && <Link to="/signup">
            <h4>Signup</h4>
          </Link>}
          {user && <AppsubmitButton title="LogOut" onClick={handleLogout}/>}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
