import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
// import { Input } from 'reactstrap';
import TakeAssessmentCards from '../components/Cards/TakeAssessmentCards';
import {
  getClassNamesByUserId,
  getClassNameWithStudentsByTeacherName,
} from '../helpers/data/classNamesData';
import getAllStandards from '../helpers/data/standardsData';
import getAllRubrics from '../helpers/data/rubricsData';
import getTakeAssessmentByAssessmentId from '../helpers/data/takeAssessmentsData';
import {
  TakeAssessmentContainer,
  TakeAssessmentCardContainer,
  TitleContainer,
  Button,
  Form,
} from './TakeAssessmentElements';

function TakeAssessments({ user }) {
  const [className, setClassName] = useState(null);
  const [takeAssessments, setTakeAssessments] = useState(null);
  const [standards, setStandards] = useState(null);
  const [rubrics, setRubrics] = useState(null);
  const [classNames, setClassNames] = useState(null);
  const { id } = useParams();
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
      getClassNameWithStudentsByTeacherName(id).then((resp) => setClassName(resp));
      getTakeAssessmentByAssessmentId(id).then((takeAssessList) => setTakeAssessments(takeAssessList));
      getAllStandards().then((standardsList) => setStandards(standardsList));
      getAllRubrics().then((rubricsList) => setRubrics(rubricsList));
      getClassNamesByUserId(user.id).then((classList) => setClassNames(classList));
    }
  }, []);

  return (
    <TakeAssessmentContainer>
      <TitleContainer className='assessment-header'>
        <h1>{standards.standardName} Assessment</h1>
        <h1>{classNames.className}</h1>
        <h1>{standards.standardDescription}</h1>
        <h1>
          Choose student`&apos;`s score for {rubrics.rubricName} Assessment
        </h1>
      </TitleContainer>
      <Form id='addClassNameForm' autoComplete='off' >
        <TakeAssessmentCardContainer className='card-container takeAssessment-view'>
          {className
          && className?.map((takeAssessmentInfo, index) => (
              <TakeAssessmentCards
                key={index}
                id={takeAssessmentInfo.id}
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
