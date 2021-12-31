import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleStudentWithAssessmentsByStudentId } from '../helpers/data/studentsData';
import AssessmentNameCards from '../components/Cards/AssessmentNameCards';
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
      getSingleStudentWithAssessmentsByStudentId(id).then((resp) => setStudentAssessments(resp));
    }
  }, []);
  console.warn(studentAssessments);

  // const handleClick = (type) => {
  //   switch (type) {
  //     // case 'view':
  //     //   history.push(`/StudentAssessment/${id}`);
  //     //   break;
  //     case 'delete':
  //       deleteStudent(id).then(() =>
  //         getAllStudents().then((response) => setAllStudents(response))
  //       );
  //       history.push(`/Classes/${id}`);
  //       break;
  //     default:
  //       console.warn('nothing selected');
  //   }
  // };
  return (
    <SingleStudentContainer>
      {studentAssessments
        && <>
      {/* <Button1 id='deleteSingleStudent' onClick={() => handleClick('delete')}>
        <SingleStudentDelete
          className='SingleStudentCardDelete'
          src={deleted}
        ></SingleStudentDelete>
      </Button1> */}
      {/* <CardTitle tag='h1'>{studentAssessments.studentName}</CardTitle>
      <CardText tag='h5'>{studentAssessments.gradeLevelDescription}</CardText>
      <CardTitle tag='h5'>
        Teacher Name: {studentAssessments.teacherName}
      </CardTitle> */}
      <CardText tag='h2'>Assessments</CardText>
      <AssessmentCardContainer className='card-container student-view'>
        {studentAssessments?.map((assessmentInfo, index) => (
          <AssessmentNameCards
            key={index}
            id={assessmentInfo.id}
            setStudentAssessments={setStudentAssessments}
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
