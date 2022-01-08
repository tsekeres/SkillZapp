// needs each card to have a delete button
// needs to be clickable to view single class
// needs to display teacher name and gradelevel description or number
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StudentAssessmentCard,
  StudentAssessmentCardBody,
  CardTitle,
  CardText
} from './StudentAssessmentCardsElements';

function StudentAssessmentCards({
  studentName,
  teacherName,
  gradeLevelDescription,
  standardName,
  assessmentDate,
  score,
}) {
  const [date] = useState(assessmentDate.split('T'));

  return (
    // this card needs delete student button
    <StudentAssessmentCard className="AssessmentCard" id="AssessmentCard">
      <StudentAssessmentCardBody>
        <CardTitle>{studentName}</CardTitle>
        <CardText>{teacherName}</CardText>
        <CardText>{gradeLevelDescription}</CardText>
        <CardText>{standardName}</CardText>
        <CardText>{date[0]}</CardText>
        <CardText>{score}</CardText>
      </StudentAssessmentCardBody>
    </StudentAssessmentCard>
  );
}

StudentAssessmentCards.propTypes = {
  studentName: PropTypes.string,
  teacherName: PropTypes.string,
  gradeLevelDescription: PropTypes.string,
  standardName: PropTypes.string,
  assessmentDate: PropTypes.any,
  score: PropTypes.any,
};

export default StudentAssessmentCards;
