import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { Form } from 'reactstrap';
import TakeAssessmentCards from '../components/Cards/TakeAssessmentCards';
import { getStudentsByClassNameId } from '../helpers/data/studentsData';
import {
  TakeAssessmentContainer,
  TakeAssessmentCardContainer,
  TitleContainer,
  Button,
} from './TakeAssessmentElements';
import { getRubricById } from '../helpers/data/rubricsData';
import { getStandardById } from '../helpers/data/standardsData';
import { getClassNameById } from '../helpers/data/classNamesData';

function TakeAssessments({ user }) {
  const [className, setClassName] = useState(null);
  const [rubric, setRubric] = useState(null);
  const [standard, setStandard] = useState(null);
  const [classObj, setClassObj] = useState(null);
  const {
    rubricId, standardId, classNameId, id
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
      getRubricById(rubricId).then((rubricObj) => setRubric(rubricObj));
      getStandardById(standardId).then((standardObj) => setStandard(standardObj));
      getClassNameById(classNameId).then((classNameObj) => setClassObj(classNameObj));
    }
  }, []);
  return (
    <TakeAssessmentContainer>
      {standard && classObj && rubric
        && <TitleContainer className='assessment-header'>
          <h1>{standard.standardName} Assessment</h1>
          <h1>{classObj.teacherName}</h1>
          <h1>{standard.standardDescription}</h1>
          <h1>
            Choose student&apos;s score for {rubric.rubricName} Assessment
          </h1>
        </TitleContainer>
      }
      <Form id='addClassNameForm' autoComplete='off' >
        <TakeAssessmentCardContainer>
          {className
          && className?.map((takeAssessmentInfo, index) => (
              <TakeAssessmentCards
                key={index}
                id={id}
                user={user}
                studentName={className.studentName}
                classNameId={className.classNameId}
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
