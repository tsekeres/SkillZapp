// needs each card to have a delete button
// needs to be clickable to view single class
// needs to display teacher name and gradelevel description or number
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StudentNameCard,
  StudentNameCardBody,
  CardTitle,
  // CardText,
} from './StudentNameCardsElements';

const StudentNameCards = ({ StudentName, id }) => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/Students/${id}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    // this card needs delete student button
    <StudentNameCard
      className='ClassCard'
      id='ClassCard'
      onClick={() => handleClick('view')}
    >
      <StudentNameCardBody>
        <CardTitle tag='h5'>{StudentName}</CardTitle>
        {/* <CardText tag='h5'>{gradeLevelDescription}</CardText> */}
      </StudentNameCardBody>
    </StudentNameCard>
  );
};

StudentNameCards.propTypes = {
  gradeLevelDescription: PropTypes.any,
  StudentName: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.any,
};

export default StudentNameCards;
