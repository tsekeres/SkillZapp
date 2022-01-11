import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleStudentWithAssessmentsByStudentId } from '../helpers/data/studentsData';
import StudentAssessmentCards from '../components/Cards/StudentAssessmentCards';
import {
  SingleStudentContainer,
  BackButton,
  BackButtonContainer,
  TitleContainer,
  CardText,
  AssessmentCardContainer,
} from './SingleStudentElements';

function SingleStudent() {
  const history = useHistory();
  const [studentAssessments, setStudentAssessments] = useState(null);
  const {
    classNameId, studentName, teacherName, id
  } = useParams();

  useEffect(() => {
    if (id) {
      getSingleStudentWithAssessmentsByStudentId(id).then((resp) => setStudentAssessments(resp));
    }
  }, []);
  console.warn(classNameId);
  const handleClick = (type) => {
    switch (type) {
      case 'back':
        history.push(`/Classes/${classNameId}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <SingleStudentContainer>
      <TitleContainer className='classes-header'>
        <h1>{studentName}</h1>
        <hr></hr>
        <h1>{teacherName}&apos;s Class</h1>
      </TitleContainer>
      <BackButtonContainer className='BackButtonContainer'>
        <BackButton className='backButton' onClick={() => handleClick('back')}>
          Back to Class View
        </BackButton>
      </BackButtonContainer>
      {studentAssessments && (
        <>
          <CardText tag='h2'>{studentAssessments.studentName}</CardText>
          <AssessmentCardContainer className='card-container student-view'>
            {studentAssessments?.map((assessmentInfo, index) => (
              <StudentAssessmentCards
                key={index}
                id={assessmentInfo.id}
                studentName={assessmentInfo.studentName}
                teacherName={assessmentInfo.teacherName}
                gradeLevelDescription={assessmentInfo.gradeLevelDescription}
                score={assessmentInfo.score}
                assessmentDate={assessmentInfo.assessmentDate}
                standardName={assessmentInfo.standardName}
              />
            ))}
          </AssessmentCardContainer>
        </>
      )}
    </SingleStudentContainer>
  );
}

SingleStudent.propTypes = {
  id: PropTypes.any,
};

export default SingleStudent;
