import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AssessmentForm from '../components/Forms/AssessmentForm';
import AssessmentCards from '../components/Cards/AssessmentCards';
import { getClassNamesByUserId } from '../helpers/data/classNamesData';
import { getAllStandards } from '../helpers/data/standardsData';
import { getAllRubrics } from '../helpers/data/rubricsData';
// import SearchBarAssessments from '../components/Searchbar/SearchBarClasses';
import { getAssessmentsWithDetailsByUserId } from '../helpers/data/assessmentsData';
import {
  AssessmentContainer,
  AssessmentCardContainer,
  TitleContainer,
  AddAssessmentButton,
  AddButtonContainer,
  Modal,
  Button,
  ButtonImg,
} from './AssessmentsElements';
import deleted from '../Assets/Delete.png';

function Assessments({ user }) {
  const [assessments, setAssessments] = useState(null);
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
      getAssessmentsWithDetailsByUserId(user.id).then((assessList) => setAssessments(assessList));
      getAllStandards().then((standardsList) => setStandards(standardsList));
      getAllRubrics().then((rubricsList) => setRubrics(rubricsList));
      getClassNamesByUserId(user.id).then((classList) => setClassNames(classList));
    }
  }, []);
  return (
    <AssessmentContainer>
      {classNames && rubrics && standards && (
        <>
          <TitleContainer className="assessment-header">
            <h1>{user.firstName}&apos;s Assessments</h1>
          </TitleContainer>

          {/* <SearchBarClasses user={user} /> */}

          <AddButtonContainer className="AddButtonContainer">
            <AddAssessmentButton className="addClass" onClick={openModal}>
              Create a new Assessment
            </AddAssessmentButton>
          </AddButtonContainer>
          <Modal isOpen={modalIsOpen} className="Modal">
            <Button className="modalClose" onClick={closeModal}>
              <ButtonImg src={deleted} />
            </Button>
            <AssessmentForm
              assessmentFormTitle="Create New Assessment"
              setAssessments={setAssessments}
              assessments={assessments}
              setClassNames={setClassNames}
              classNames={classNames}
              setStandards={setStandards}
              standards={standards}
              setRubrics={setRubrics}
              rubrics={rubrics}
              user={user}
              closeModal={closeModal}
            />
          </Modal>

          <AssessmentCardContainer className="card-container assessment-view">
            {assessments
              && assessments?.map((assessmentInfo, index) => (
                <AssessmentCards
                  key={index}
                  id={assessmentInfo.id}
                  user={user}
                  setAssessments={setAssessments}
                  studentName={assessmentInfo.studentName}
                  teacherName={assessmentInfo.teacherName}
                  gradeLevelDescription={assessmentInfo.gradeLevelDescription}
                  score={assessmentInfo.score}
                  standardName={assessmentInfo.standardName}
                  assessmentDate={assessmentInfo.assessmentDate}
                />
              ))}
          </AssessmentCardContainer>
        </>
      )}
    </AssessmentContainer>
  );
}

Assessments.propTypes = {
  user: PropTypes.any,
};

export default Assessments;
