import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleStudentAssessmentsByStudentId } from '../helpers/data/studentsData';
import AssessmentCards from '../components/Cards/AssessmentCards';
import {
  SingleStudentContainer,
  // CardTitle,
  CardText,
  AssessmentCardContainer,
} from './SingleStudentElements';

function SingleStudent() {
  const [studentAssessments, setStudentAssessments] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleStudentAssessmentsByStudentId(id).then((resp) => setStudentAssessments(resp));
    }
  }, []);

  return (
    <SingleStudentContainer>
      {studentAssessments
        && <><CardText tag='h2'>{studentAssessments.studentName}</CardText>
            <AssessmentCardContainer className='card-container student-view'>
              {studentAssessments?.map((assessmentInfo, index) => (
                <AssessmentCards
                  key={index}
                  id={assessmentInfo.id}
                  studentName={assessmentInfo.studentName}
                  teacherName={assessmentInfo.teacherName}
                  gradeLevelDescription={assessmentInfo.gradeLevelDescription}
                  score={assessmentInfo.score}
                  standardName={assessmentInfo.standardName}
                />
              ))}
            </AssessmentCardContainer>
          </>}
    </SingleStudentContainer>
  );
}

SingleStudent.propTypes = {
  id: PropTypes.any,
};

export default SingleStudent;
