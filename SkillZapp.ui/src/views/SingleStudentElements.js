import styled from 'styled-components';

export const SingleStudentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  text-align: center;
`;

export const AssessmentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 125px;
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
