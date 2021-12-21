import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Assets/Logo.png';
import {
  HomeContainer, WelcomeContainer, ImageContainer, LoginContainer
} from './HomeElements';

function Home({ user }) {
  return (
    <HomeContainer className="user-welcome">
      <WelcomeContainer>
        <h1>Welcome to SkillZapp</h1>
        <h1>
          Assessing student skills just became the easiest part of your day!
        </h1>
        <ImageContainer>
        <img className="navLogo" src={Logo}></img>
        </ImageContainer>
      </WelcomeContainer>
      <LoginContainer>
        {user ? <h2>Let&apos;s get started!</h2> : <h2>Please Log In</h2>}
      </LoginContainer>
    </HomeContainer>
  );
}

Home.propTypes = {
  user: PropTypes.any,
};

export default Home;
