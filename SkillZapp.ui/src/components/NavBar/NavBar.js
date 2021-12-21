import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  NavigationBar,
  NavbarBrand,
  NavItem,
  NavLink,
  Button,
} from './NavBarElements';
import { signInUser, signOutUser } from '../../helpers/auth';
import Logo from '../../Assets/Logo.png';

const NavBar = ({ user }) => (
  <div>
    <NavigationBar fixed="top" light expand="md">
      <NavbarBrand href="/home">
        <img className="navLogo" src={Logo}></img>
      </NavbarBrand>
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
      {user !== null && (
        <NavItem className="nav-id-info">
          {user ? (
            <div className="user-info">
              <div>
                <img className="profilePic" src={user.profileImage}></img>
              </div>
              <div className="userInfo">
                <div>{user.fullName}</div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </NavItem>
      )}
      {user !== null && (
        <NavItem>
          {user ? (
            <Button className="btn-out" onClick={signOutUser}>
              Sign Out
            </Button>
          ) : (
            <Button className="btn-in" onClick={signInUser}>
              Sign In
            </Button>
          )}
        </NavItem>
      )}
    </NavigationBar>
  </div>
);

NavBar.propTypes = {
  user: PropTypes.any,
};

export default NavBar;
