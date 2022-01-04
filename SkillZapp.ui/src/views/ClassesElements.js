import styled from 'styled-components';

export const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const ClassCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  justify-content: center;
`;

export const TitleContainer = styled.div`
 color: #ffb400;
 margin-bottom: 20px;
`;

export const SearchBarClasses = styled.img`
  width: 400px;
  height: 15px;
  background: #ffb400;
  border: 1px solid black;
  border-radius: 5px;
  // margin-top: 15px;
  margin-right: 5px;
  transitionL 0.3s ease-in-out;
  opacity:  ${({ isOpen2 }) => (isOpen2 ? '100%' : '0')};
  top: ${({ isOpen2 }) => (isOpen2 ? '0' : '-100%')};
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

// export const AddClassButtonImg = styled.img`
//   height: 15px;
// `;

export const AddButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
`;

export const AddClassButton = styled.button`
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
