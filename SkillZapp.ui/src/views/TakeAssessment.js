import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import TakeAssessmentCards from '../components/Cards/TakeAssessmentCards';
import getTakeAssessmentByAssessmentId from '../helpers/data/takeAssessmentsData';
import {
  TakeAssessmentContainer,
  TakeAssessmentCardContainer,
  TitleContainer1,
  TitleContainer2,
  Button,
} from './TakeAssessmentElements';
import { getStandardById } from '../helpers/data/standardsData';

function TakeAssessments({ user }) {
  const [takeAssessments, setTakeAssessments] = useState(null);
  const [standard, setStandard] = useState(null);
  const {
    standardId, assessmentId
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
  console.warn(standardId);
  useEffect(() => {
    if (user) {
      getStandardById(standardId).then((standardObj) => setStandard(standardObj));
      getTakeAssessmentByAssessmentId(assessmentId).then((takeAssessList) => setTakeAssessments(takeAssessList));
    }
  }, []);
  return (
    <TakeAssessmentContainer>
      {standard && takeAssessments && (
        <>
          <TitleContainer1 className='assessment-header'>
            <h3>{standard.standardName}</h3>
            <h3>{standard.standardDescription}</h3>
          </TitleContainer1>
          <TitleContainer2 className='assessment-header'>
            <h3>{takeAssessments[0].teacherName}&apos;s Class</h3>
            <h4>
              Choose student&apos;s score for {takeAssessments[0].rubricName}{' '}
              Assessment
            </h4>
          </TitleContainer2>
        </>
      )}
      <div id='addClassNameForm' autoComplete='off'>
        <TakeAssessmentCardContainer>
          {takeAssessments?.map((takeAssessmentInfo, index) => (
            <TakeAssessmentCards
              key={index}
              studentAssessmentId={takeAssessmentInfo.studentAssessmentId}
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
      </div>
      <Button
        className='addTakeAssessments'
        onClick={() => handleClick('sendit')}
      >
        Save Assessment
      </Button>
    </TakeAssessmentContainer>
  );
}

TakeAssessments.propTypes = {
  user: PropTypes.any,
};

export default TakeAssessments;
