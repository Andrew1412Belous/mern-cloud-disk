import { NavLink } from 'react-router-dom'

import Logo from '../../assets/img/navbar-logo.svg'
import './navbar.scss'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <img src={Logo} alt="" className="navbar__logo"/>
          <div className="navbar__header">MERN CLOUD</div>
          <div className="navbar__login"><NavLink to="/login">Sign in</NavLink></div>
          <div className="navbar__registration"><NavLink to="/authorization">Sign up</NavLink></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
