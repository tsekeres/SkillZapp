// need delete buttons
// needs to be clickable to view single class
// needs to display teacher name and gradelevel description or number
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StudentNameCard,
  StudentNameCardBody,
  CardTitle,
  CardText,
} from './StudentNameCardsElements';

function StudentNameCards({
  studentName,
  teacherName,
  gradeLevelDescription,
  id
}) {
  const history = useHistory();
  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/Students/${studentName}/${teacherName}/${id}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    // this card needs delete student button
    <StudentNameCard
      className='StudentCard'
      id='StudentCard'
      onClick={() => handleClick('view')}
    >
      <StudentNameCardBody>
        <CardTitle>{studentName}</CardTitle>
        <CardText>{teacherName}</CardText>
        <CardText>{gradeLevelDescription}</CardText>
      </StudentNameCardBody>
    </StudentNameCard>
  );
}

StudentNameCards.propTypes = {
  gradeLevelDescription: PropTypes.any,
  studentName: PropTypes.string,
  teacherName: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.any,
};

export default StudentNameCards;
