import styled from 'styled-components';

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  background: #c0f3d5;
  height: 70px;
  display: flex;
  margin: 10px;
  justify-content: center;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarBrand = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavLink = styled.div`
  font-size: 2rem;
  margin-left: 15px;
  margin-right: 15px;

  @media screen and (max-width: 1150px) {
    font-size: 2rem;
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 950px) {
    font-size: 2rem;
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 840px) {
    font-size: 1rem;
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 720px) {
    font-size: 1rem;
    margin-left: 3px;
    margin-right: 3px;
  }

  @media screen and (max-width: 650px) {
    font-size: 1rem;
    margin-left: 3px;
    margin-right: 3px;
  }

  @media screen and (max-width: 525px) {
    display: none;
  }
`;

export const NavItemsMiddle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  padding: .5em;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavItemsRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 0.5em;
`;

export const SignIn = styled.img`
  width: 30px;
  // // height: 20px;
  // margin-top: -25px;
  margin-bottom: 20px;
  // margin-right: 30px;
  // margin-left: 30px;

  @media screen and (max-width: 650px) {
    width: 15px;
    height: 15px;
  }

  @media screen and (max-width: 525px) {
    width: 15px;
    height: 15px;
    margin-right: 15px;
  }
`;

export const Button = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  // overflow: hidden;
  // align-items: start;
`;
