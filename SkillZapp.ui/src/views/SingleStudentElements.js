import styled from 'styled-components';

export const SingleStudentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  text-align: center;
  margin: 10px;
  margin-bottom: 100px;
  background: #1a2a2d;
`;

export const AssessmentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffb400;
  border-radius: 3%;
  margin: 50px;
  align-items: center;
  padding-top: 50px;
  // width: 600px;
  // height: 1000px;
  // padding-bottom: 125px;
`;

export const TitleContainer = styled.div`
  color: #ffb400;
  margin-bottom: 20px;
`;

export const CardText = styled.div``;

export const SearchBar = styled.img`
  width: 400px;
  height: 15px;
  background: #fff;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 8px;
  margin-right: 5px;
  transitionL 0.3s ease-in-out;
//   opacity:  ${({ isOpen2 }) => (isOpen2 ? '100%' : '0')};
//   top: ${({ isOpen2 }) => (isOpen2 ? '0' : '-100%')};
`;

export const BackButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
`;

export const BackButton = styled.button`
  // display: flex;
  // flex-direction: row-wrap;
  align-items: center;
  border: 3px solid black;
  border-radius: 10px;
  width: 200px;
  height: 75px;
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
