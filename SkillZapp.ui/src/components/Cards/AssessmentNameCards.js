// needs each card to have a delete button
import React from 'react';
import PropTypes from 'prop-types';
import {
  AssessmentNameCard,
  AssessmentNameCardBody,
  CardTitle,
  CardText,
} from './AssessmentNameCardsElements';

const AssessmentNameCards = ({
  studentName,
  teacherName,
  gradeLevelDescription,
  score,
  standardName,
}) => (
    // this card needs delete student button
    <AssessmentNameCard className='AssessmentCard' id='AssessmentCard'>
      <AssessmentNameCardBody>
        <CardTitle tag='h2'>{studentName}</CardTitle>
        <CardText tag='h5'>{teacherName}</CardText>
        <CardText tag='h5'>{gradeLevelDescription}</CardText>
        <CardText tag='h5'>{standardName}</CardText>
        <CardText tag='h5'>{score}</CardText>
      </AssessmentNameCardBody>
    </AssessmentNameCard>
);

AssessmentNameCards.propTypes = {
  gradeLevelDescription: PropTypes.any,
  studentName: PropTypes.string,
  teacherName: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.any,
  score: PropTypes.any,
  standardName: PropTypes.any,
};

export default AssessmentNameCards;
