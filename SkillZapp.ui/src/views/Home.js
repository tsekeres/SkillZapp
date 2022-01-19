import React from 'react';
import PropTypes from 'prop-types';
import Logo2 from '../Assets/Logo2.png';
import {
  HomeContainer,
  WelcomeContainer,
  ImageContainer,
  LoginContainer,
  UserName,
  LogoImg,
} from './HomeElements';

function Home({ user }) {
  return (
    <HomeContainer className='user-welcome'>
      <LoginContainer>
        {user ? <h2>Let&apos;s get started!</h2> : <h2>Please Log In</h2>}
      </LoginContainer>
      {user !== null && (
        <UserName className='nav-id-info'>
          {user ? (
            <div className='user-info'>
              <div className='userInfo'>
                <div>{user.firstName}</div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </UserName>
      )}
      <ImageContainer>
        <LogoImg className='navLogo' src={Logo2}></LogoImg>
      </ImageContainer>
      <WelcomeContainer>
        <a>Welcome to SkillZapp!</a>
        <a>
          Assessing student skills just became the easiest part of your day.
        </a>
      </WelcomeContainer>
    </HomeContainer>
  );
}

Home.propTypes = {
  user: PropTypes.any,
};

export default Home;
