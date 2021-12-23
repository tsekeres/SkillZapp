import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  NavigationBar,
  NavbarBrand,
  NavItem,
  NavLink,
  Button,
  SignIn,
  NavItemsMiddle,
  NavItemsRight,
} from './NavBarElements';
import { signInUser, signOutUser } from '../../helpers/auth';
import Logo2 from '../../Assets/Logo2.png';
import loggedOut from '../../Assets/LoggedOut.png';
import loggedIn from '../../Assets/LoggedIn.png';

const NavBar = ({ user }) => (
  <div>
    <NavigationBar fixed="top" light expand="md">
      <NavbarBrand href="/home">
        <img className="navLogo" src={Logo2}></img>
      </NavbarBrand>
      <NavItemsMiddle>
        <NavItem>
          <NavLink>
            <Link className="classes" to="/Classes">
              Classes
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link className="students" to="/Students">
              Students
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link className="Assess" to="/Assessment">
              Assessments
            </Link>
          </NavLink>
        </NavItem>
      </NavItemsMiddle>
      {user !== null && (
        <NavItem className="nav-id-info">
          {user ? (
            <div className="user-info">
              <div>
                <img className="profilePic" src={user.profilePicURL}></img>
              </div>
              <div className="userInfo">
                <div>{user.firstName}</div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </NavItem>
      )}
      {user !== null && (
        <NavItemsRight>
          {user ? (
              <Button id="signOut" onClick={signOutUser}>
                <SignIn className="SignOut" src={loggedIn}></SignIn>
              </Button>
          ) : (
              <Button id="signIn" onClick={signInUser}>
                <SignIn className="SignIn" src={loggedOut}></SignIn>
              </Button>
          )}
        </NavItemsRight>
      )}
    </NavigationBar>
  </div>
);

NavBar.propTypes = {
  user: PropTypes.any,
};

export default NavBar;
