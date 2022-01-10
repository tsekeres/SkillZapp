import styled from 'styled-components';

export const SingleAssessmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  text-align: center;
  margin: 10px;
  margin-bottom: 100px;
  background: #1a2a2d;
`;

export const StudentScoreCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  color: #ffb400;
  margin-bottom: 20px;
`;

export const ChartContainer = styled.div`
  color: #ffb400;
  margin-bottom: 20px;
`;

export const CardText = styled.div`
  color: #ffb400;
  margin-bottom: 20px;
`;

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
