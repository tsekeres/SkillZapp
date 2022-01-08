import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { Form } from 'reactstrap';
import TakeAssessmentCards from '../components/Cards/TakeAssessmentCards';
import getTakeAssessmentByAssessmentId from '../helpers/data/takeAssessmentsData';
// import { getStudentsByClassNameId } from '../helpers/data/studentsData';
import {
  TakeAssessmentContainer,
  TakeAssessmentCardContainer,
  TitleContainer,
  Button,
} from './TakeAssessmentElements';
import { getStandardById } from '../helpers/data/standardsData';

function TakeAssessments({ user }) {
  // const [className, setClassName] = useState(null);
  const [takeAssessments, setTakeAssessments] = useState(null);
  const [standard, setStandard] = useState(null);
  const {
    standardId, id
  } = useParams();
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'sendit':
        history.push('/Assessments');
        break;
      default:
        console.warn('nothing selected');
    }
  };

  useEffect(() => {
    if (user) {
      // getStudentsByClassNameId(classNameId).then((resp) => setClassName(resp));
      getStandardById(standardId).then((standardObj) => setStandard(standardObj));
      getTakeAssessmentByAssessmentId(id).then((takeAssessList) => setTakeAssessments(takeAssessList));
    }
  }, []);
  return (
    <TakeAssessmentContainer>
      {standard && takeAssessments && (
        <TitleContainer className='assessment-header'>
          <h1>{standard.standardName}</h1>
          <h1>{takeAssessments[0].teacherName}&apos;s Class</h1>
          <h1>{standard.standardDescription}</h1>
          <h1>
            Choose student&apos;s score for {takeAssessments[0].rubricName}{' '}
            Assessment
          </h1>
        </TitleContainer>
      )}
      <Form id='addClassNameForm' autoComplete='off'>
        <TakeAssessmentCardContainer>
          {takeAssessments?.map((takeAssessmentInfo, index) => (
            <TakeAssessmentCards
              key={index}
              id={takeAssessmentInfo.studentAssessmentId}
              studentId={takeAssessmentInfo.studentId}
              user={user}
              setTakeAssessments={setTakeAssessments}
              studentName={takeAssessmentInfo.studentName}
              classNameId={takeAssessmentInfo.classNameId}
              assessmentId={takeAssessmentInfo.assessmentId}
              teacherName={takeAssessmentInfo.teacherName}
              gradeLevelDescription={takeAssessmentInfo.gradeLevelDescription}
              standardName={takeAssessmentInfo.standardName}
              assessmentDate={takeAssessmentInfo.assessmentDate}
              score={takeAssessmentInfo.score}
              rubricLevelD={takeAssessmentInfo.rubricLevelD}
              rubricLevelA={takeAssessmentInfo.rubricLevelA}
              rubricLevelB={takeAssessmentInfo.rubricLevelB}
              rubricLevelC={takeAssessmentInfo.rubricLevelC}
            />
          ))}
        </TakeAssessmentCardContainer>
        <Button
          className='addTakeAssessments'
          onClick={() => handleClick('sendit')}
        >
          Save Assessment
        </Button>
      </Form>
    </TakeAssessmentContainer>
  );
}

TakeAssessments.propTypes = {
  user: PropTypes.any,
};

export default TakeAssessments;
