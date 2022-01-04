import styled from 'styled-components';

export const AssessmentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;
  border-radius: 15px;
  width: 300px;
  height: 100px;
  margin: 30px;
  padding: 10px;
  background-color: #52abab;

  @media screen and (max-width: 525px) {
    margin-left: 25px;
    margin-right: 20px;
  }

  opacity: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  top: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

export const Modal = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #fff;
display: grid;
align-items: center;
top: 0;
left: 0;
transitionL 0.3s ease-in-out;
opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  height: 50%;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
`;

export const Button1 = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
`;

export const Button2 = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
`;

export const AssessmentCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 30%;
  width: 100%;
  justify-content: flex-end;
`;

export const AssessmentCardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const AssessmentCardEdit = styled.img`
  height: 15px;
`;

export const AssessmentCardDelete = styled.img`
  height: 13px;
  margin-right: 5px;
`;

export const Modal1 = styled.div``;

export const AssessmentCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  // margin-top: 5px;
  // margin-bottom: 5px;
  width: 100%;
  // text-transform: lowercase;
  background-color: #52abab;

  @media screen and (max-width: 920px) {
    font-size: 10px;
  }
`;

export const CardTitle = styled.div`
  font-size: 1rem;
`;
export const CardText = styled.div`
  font-size: 1rem;
`;
