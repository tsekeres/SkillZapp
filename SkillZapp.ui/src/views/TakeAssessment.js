import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TakeAssessmentCards from '../components/Cards/TakeAssessmentCards';
import { getClassNamesByUserId } from '../helpers/data/classNamesData';
import getAllStandards from '../helpers/data/standardsData';
import getAllRubrics from '../helpers/data/rubricsData';
import GetTakeAssessmentByAssessmentId from "../helpers/data/takeAssessmentsData";
import {
  TakeAssessmentContainer,
  TakeAssessmentCardContainer,
  TitleContainer,
  Button,
  ButtonImg,
} from './AssessmentsElements';
import deleted from '../Assets/Delete.png';

function Assessments({ user }) {
  const [takeAssessments, setTakeAssessments] = useState(null);
  const [standards, setStandards] = useState(null);
  const [rubrics, setRubrics] = useState(null);
  const [classNames, setClassNames] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (user) {
      GetTakeAssessmentByAssessmentId(user.id).then((takeAssessList) =>
        setTakeAssessments(takeAssessList)
      );
      getAllStandards().then((standardsList) => setStandards(standardsList));
      getAllRubrics().then((rubricsList) => setRubrics(rubricsList));
      getClassNamesByUserId(user.id).then((classList) => setClassNames(classList));
    }
  }, []);

  return (
    <TakeAssessmentContainer>
          <TitleContainer className='assessment-header'>
            <h1>{standards.standardName} Assessment</h1>
            <h1>{className.className}</h1>
            <h1>{standards.standardDescription}</h1>
          </TitleContainer>

          <TakeAssessmentCardContainer className='card-container assessment-view'>
            {assessments &&
              assessments?.map((assessmentInfo, index) => (
                <AssessmentCards
                  key={index}
                  id={assessmentInfo.id}
                  studentName={assessmentInfo.studentName}
                  teacherName={assessmentInfo.teacherName}
                  gradeLevelDescription={assessmentInfo.gradeLevelDescription}
                  score={assessmentInfo.score}
                  standardName={assessmentInfo.standardName}
                  assessmentDate={assessmentInfo.assessmentDate}
                />
              ))}
          </TakeAssessmentCardContainer>
        </>
      )}
    </TakeAssessmentContainer>
  );
}

Assessments.propTypes = {
  user: PropTypes.any,
};

export default Assessments;
