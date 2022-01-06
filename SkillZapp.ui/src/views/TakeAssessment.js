import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { Form } from 'reactstrap';
import TakeAssessmentCards from '../components/Cards/TakeAssessmentCards';
import { getStudentsByClassNameId } from '../helpers/data/studentsData';
import getTakeAssessmentByAssessmentId from '../helpers/data/takeAssessmentsData';
import {
  TakeAssessmentContainer,
  TakeAssessmentCardContainer,
  TitleContainer,
  Button,
} from './TakeAssessmentElements';

function TakeAssessments({ user }) {
  const [className, setClassName] = useState(null);
  const [takeAssessments, setTakeAssessments] = useState(null);
  const {
    rubricName, teacherName, standardDescription, standardName, classNameId, id
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
      getStudentsByClassNameId(classNameId).then((resp) => setClassName(resp));
      getTakeAssessmentByAssessmentId(id).then((takeAssessList) => setTakeAssessments(takeAssessList));
    }
  }, []);
  console.warn(className);
  return (
    <TakeAssessmentContainer>
      <TitleContainer className='assessment-header'>
        <h1>{standardName} Assessment</h1>
        <h1>{teacherName}</h1>
        <h1>{standardDescription}</h1>
        <h1>
          Choose student&apos;s score for {rubricName} Assessment
        </h1>
      </TitleContainer>
      <Form id='addClassNameForm' autoComplete='off' >
        <TakeAssessmentCardContainer>
          {className
          && className?.map((takeAssessmentInfo, index) => (
              <TakeAssessmentCards
                key={index}
                id={takeAssessmentInfo.id}
                studentName={className.studentName}
                classNameId={className.classNameId}
                takeAssessments={takeAssessments}
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
