import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteAssessment, getAssessmentsWithDetailsByUserId } from '../../helpers/data/assessmentsData';
import deleted from '../../Assets/Delete.png';
import {
  AssessmentCard,
  AssessmentCardBody,
  AssessmentCardDelete,
  AssessmentCardHeader,
  AssessmentCardButtons,
  Button1,
  CardTitle,
  CardText,
} from './AssessmentCardsElements';

function AssessmentCards({
  user,
  assessmentId,
  teacherName,
  gradeLevelDescription,
  standardName,
  assessmentDate,
  setAssessments,
}) {
  const history = useHistory();
  const [date] = useState(assessmentDate.split('T'));
  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/Assessments/${assessmentId}`);
        break;
      case 'delete':
        deleteAssessment(assessmentId).then(() => getAssessmentsWithDetailsByUserId(user.id).then((assessList) => setAssessments(assessList)));
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <AssessmentCard className='AssessmentCard' id='AssessmentCard'>
      <AssessmentCardHeader className='AssessmentCardHeader'>
        <AssessmentCardButtons className='AssessmentCardButtons'>
          <Button1 id='deleteClass' onClick={() => handleClick('delete')}>
            <AssessmentCardDelete
              className='AssessmentCardDelete'
              src={deleted}
            ></AssessmentCardDelete>
          </Button1>
        </AssessmentCardButtons>
      </AssessmentCardHeader>
      <AssessmentCardBody onClick={() => handleClick('view')}>
        <CardTitle>{standardName}</CardTitle>
        <CardText>Teacher: {teacherName}</CardText>
        <CardText>Grade Level: {gradeLevelDescription}</CardText>
        <CardText>Date Assessed: {date[0]}</CardText>
      </AssessmentCardBody>
    </AssessmentCard>
  );
}

AssessmentCards.propTypes = {
  user: PropTypes.any,
  assessmentId: PropTypes.any,
  teacherName: PropTypes.any,
  gradeLevelDescription: PropTypes.any,
  standardName: PropTypes.any,
  assessmentDate: PropTypes.any,
  setAssessments: PropTypes.func,
};

export default AssessmentCards;
