// needs each card to have a delete button
// needs to be clickable to view single class
// needs to display teacher name and gradelevel description or number
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
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
  assessmentDate,
}) {
  const [date] = useState(assessmentDate.split('T'));
  return (
    // this card needs delete assessment button
    <AssessmentCard className="AssessmentCard" id="AssessmentCard">
      <AssessmentCardBody>
        <CardTitle>{standardName}</CardTitle>
        <CardText>Teacher: {teacherName}</CardText>
        <CardText>Grade Level: {gradeLevelDescription}</CardText>
        <CardText>Date Assessed: {date[0]}</CardText>
      </AssessmentCardBody>
    </AssessmentCard>
  );
}

AssessmentCards.propTypes = {
  teacherName: PropTypes.any,
  gradeLevelDescription: PropTypes.any,
  standardName: PropTypes.any,
  assessmentDate: PropTypes.any,
};

export default AssessmentCards;
