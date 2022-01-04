// needs each card to have a delete button
// needs to be clickable to view single class
// needs to display teacher name and gradelevel description or number
import React from 'react';
import PropTypes from 'prop-types';
import {
  AssessmentCard,
  AssessmentCardBody,
  CardTitle,
  CardText,
} from './AssessmentCardsElements';

function AssessmentCards({
  teacherName,
  gradeLevelDescription,
  standardName,
}) {
  return (
    // this card needs delete assessment button
    <AssessmentCard className="AssessmentCard" id="AssessmentCard">
      <AssessmentCardBody>
        <CardTitle>{standardName}</CardTitle>
        <CardText>{teacherName}</CardText>
        <CardText>{gradeLevelDescription}</CardText>
      </AssessmentCardBody>
    </AssessmentCard>
  );
}

AssessmentCards.propTypes = {
  teacherName: PropTypes.any,
  gradeLevelDescription: PropTypes.any,
  standardName: PropTypes.any,
};

export default AssessmentCards;
