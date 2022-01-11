import styled from 'styled-components';

export const AddStudentForm = styled.div``;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 75%;
  background-color: #1a2a2d;
  color: #ffb400;
  font-weight: bold;
  border-radius: 15px;
`;

export const StudentFormTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #ffb400;
  margin-top: 10px;
`;

export const Row = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const FormHeader = styled.div`
  padding-bottom: 75px;
`;

export const Label = styled.label`
  padding-bottom: 25px;
`;

export const Input = styled.input`
  margin-bottom: 50px;
  border-radius: 10px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60px;
  background-color: #ffb400;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
`;

export const ButtonImg = styled.img`
  height: 15px;
`;

export const Option = styled.option`
  height: 15px;
`;

export const Select = styled.select`
  border-radius: 5px;
  margin-left: 10px;
  width: 75%;
`;
