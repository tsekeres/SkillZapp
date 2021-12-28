// needs to be clickable to view single class
//needs to display teacher name and gradelevel description or number
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StudentCard,
  StudentCardBody,
  SingleStudentCardDelete,
  CardTitle,
  CardText,
} from './ClassCardsElements';
import deleted from '../../Assets/Delete.png';


const StudentCard = ({ user }) => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/Students/${id}`);
        break;
      case 'delete':
        deleteStudent(id).then(() =>
          getAllStudents().then((response) => setAllStudents(response))
        );
        history.push(`/Classes/${id}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <StudentCard
      className="ClassCard"
      id="ClassCard"
      onClick={() => handleClick("view")}
    >
      <Button1 id="deleteSingleStudent" onClick={() => handleClick("delete")}>
        <SingleStudentCardDelete
          className="SingleStudentCardDelete"
          src={deleted}
        ></SingleStudentCardDelete>
      </Button1>
      <StudentCardBody>
        <CardTitle tag="h5">{teacherName}</CardTitle>
        <CardText tag="h5">{gradeLevelDescription}</CardText>
      </StudentCardBody>
    </StudentCard>
  );
};

StudentCard.propTypes = {
  gradeLevelDescription: PropTypes.any,
  teacherName: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.any,
};

export default ClassCards;
