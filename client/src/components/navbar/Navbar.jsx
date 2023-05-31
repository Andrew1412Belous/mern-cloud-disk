import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducers/userReducer'

import Logo from '../../assets/img/navbar-logo.svg'

import './navbar.scss'

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth)

  const dispatch = useDispatch()

  return (
      <div className="navbar">
        <div className="container">
          <img src={Logo} alt="" className="navbar__logo"/>
          <div className="navbar__header">MERN CLOUD</div>

          {!isAuth && <div className="navbar__login"><NavLink to="/login">Sign in</NavLink></div>}
          {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Sign up</NavLink></div>}
          {isAuth && <div className="navbar__login" onClick={() => dispatch(logout()) }>Logout</div>}
        </div>

        {/*{isAuth && <NavLink to='/profile'>*/}
        {/*  <img className="navbar__avatar" src={avatar} alt=""/>*/}
        {/*</NavLink>}*/}
      </div>
  );
};

export default Navbar;
