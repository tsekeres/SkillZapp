// needs each card to have a delete button
// needs to be clickable to view single class
// needs to display teacher name and gradelevel description or number
import React from 'react';
import PropTypes from 'prop-types';
import {
  AssessmentCard,
  AssessmentCardBody,
  CardTitle,
  CardText
} from './AssessmentCardsElements';

function AssessmentCards({
  studentName,
  teacherName,
  gradeLevelDescription,
  standardName,
  score,
}) {
  return (
    // this card needs delete student button
    <AssessmentCard className="AssessmentCard" id="AssessmentCard">
      <AssessmentCardBody>
        <CardTitle tag="h2">{studentName}</CardTitle>
        <CardText tag="h2">{teacherName}</CardText>
        <CardText tag="h2">{gradeLevelDescription}</CardText>
        <CardText tag="h2">{standardName}</CardText>
        <CardText tag="h2">{score}</CardText>
      </AssessmentCardBody>
    </AssessmentCard>
  );
}

AssessmentCards.propTypes = {
  studentName: PropTypes.string,
  teacherName: PropTypes.string,
  gradeLevelDescription: PropTypes.string,
  standardName: PropTypes.string,
  score: PropTypes.any,
};

export default AssessmentCards;
