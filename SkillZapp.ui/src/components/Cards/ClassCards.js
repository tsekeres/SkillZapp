// needs each card to have a delete button
// needs to be clickable to view single class
// needs to display teacher name and gradelevel description or number
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ClassCard,
  ClassCardBody,
  CardTitle,
  CardText,
} from './ClassCardsElements';

const ClassCards = ({
  gradeLevelDescription,
  teacherName,
  id,
}) => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/Classes/${id}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    // this card needs delete class button
    <ClassCard
      className='ClassCard'
      id='ClassCard'
      onClick={() => handleClick('view')}>
      <ClassCardBody>
        <CardTitle tag='h5'>{teacherName}</CardTitle>
        <CardText tag='h5'>{gradeLevelDescription}</CardText>
      </ClassCardBody>
    </ClassCard>
  );
};

ClassCards.propTypes = {
  gradeLevelDescription: PropTypes.any,
  teacherName: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.any,
};

export default ClassCards;
