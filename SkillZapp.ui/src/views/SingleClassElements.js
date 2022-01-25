import styled from 'styled-components';

export const SingleClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin: 10px;
  margin-bottom: 100px;
  background: #1a2a2d;
`;

export const StudentCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #ffb400;
  border-radius: 3%;
  margin: 30px;
  padding-top: 10px;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffb400;
`;

export const Modal = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #125f7c;
display: flex;
flex-direction: column;
justify-content: center;
top: 0;
left: 0;
transitionL 0.3s ease-in-out;
opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`;

export const AddButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
`;

export const AddStudentButton = styled.button`
  // display: flex;
  // flex-direction: row-wrap;
  align-items: center;
  border: 3px solid black;
  border-radius: 10px;
  width: 200px;
  height: 100px;
  opacity: 0.5;
  margin-bottom: 25px;
  // padding: 10px;
  background-color: #ffb400;

  @media screen and (max-width: 525px) {
    margin-left: 25px;
    margin-right: 20px;
  }

  opacity: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  top: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
`;

export const ButtonImg = styled.img`
  height: 15px;
`;
