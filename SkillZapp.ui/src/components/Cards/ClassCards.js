import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ClassCard,
  ClassCardBody,
  CardTitle,
  // CardText,
} from './ClassCardsElements';

const ClassCards = ({
  // gradeLevelDescription,
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
    <ClassCard
      className='ClassCard'
      key={id} id='ClassCard'
      onClick={() => handleClick('view')}>
      <ClassCardBody>
        <CardTitle tag='h5'>{teacherName}</CardTitle>
        {/* <CardText tag='h5'>{gradeLevelDescription}</CardText> */}
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
