import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  NavigationBar,
  NavbarBrand,
  NavBarImage,
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

function NavBar({ user }) {
  return (
    <NavigationBar fixed="top" light expand="md">
      <NavbarBrand>
        <Link to="/">
          <NavBarImage className="navLogo" src={Logo2}></NavBarImage>
        </Link>
      </NavbarBrand>
      {
        user !== null
          && <div>
            {
              (user)
                ? <NavItemsMiddle>
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
                  </NavItemsMiddle> : <div></div>
            }
          </div>
      }
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
    </NavigationBar>
  );
}

NavBar.propTypes = {
  user: PropTypes.any,
};

export default NavBar;
