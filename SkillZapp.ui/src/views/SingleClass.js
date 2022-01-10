import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import StudentNameCards from '../components/Cards/StudentNameCards';
import StudentForm from '../components/Forms/StudentForm';
import {
  SingleClassContainer,
  TitleContainer,
  StudentCardContainer,
  AddButtonContainer,
  AddStudentButton,
  Modal,
  Button,
  ButtonImg,
} from './SingleClassElements';
import {
  getAllClassNames,
  getClassNameByClassNameId,
  getClassNameWithStudentsByTeacherName
} from '../helpers/data/classNamesData';
import getAllGradeLevels from '../helpers/data/gradeLevelsData';
import deleted from '../Assets/Delete.png';

function SingleClass({ user }) {
  const [classNameDetails, setClassNameDetails] = useState(null);
  const [className, setClassName] = useState(null);
  const [gradeLevels, setGradeLevels] = useState(null);
  const [classNames, setClassNames] = useState(null);
  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (id) {
      getClassNameByClassNameId(id).then((response) => setClassNameDetails(response));
      getClassNameWithStudentsByTeacherName(id).then((resp) => setClassName(resp));
      getAllGradeLevels().then((gradeLevelsList) => setGradeLevels(gradeLevelsList));
      getAllClassNames().then((classNamesList) => setClassNames(classNamesList));
    }
  }, []);

  return (
    <SingleClassContainer>
      {className && classNameDetails && user && (
        <>
          <TitleContainer className="classes-header">
            <h1>{classNameDetails.teacherName}</h1>
            <hr></hr>
            <h1>{classNameDetails.gradeLevelDescription}</h1>
          </TitleContainer>
          <AddButtonContainer className="AddButtonContainer">
            <AddStudentButton className="addStudent" onClick={openModal}>
              Add a New Student
            </AddStudentButton>
          </AddButtonContainer>
          <Modal isOpen={modalIsOpen} className="Modal">
            <Button className="modalClose" onClick={closeModal}>
              <ButtonImg src={deleted} />
            </Button>
            <StudentForm
              studentFormTitle="Create Student"
              setClassNames={setClassNames}
              classNames={classNames}
              setGradeLevels={setGradeLevels}
              gradeLevels={gradeLevels}
              setClassName={setClassName}
              className={className}
              user={user}
              classNameId={id}
              closeModal={closeModal}
            />
          </Modal>
          <StudentCardContainer className="card-container class-view">
            {className?.map((studentInfo, index) => (
              <StudentNameCards
                key={index}
                user={user}
                classNameId={id}
                setClassName={setClassName}
                studentId={studentInfo.studentId}
                gradeLevelId={studentInfo.gradeLevelId}
                studentName={studentInfo.studentName}
                teacherName={studentInfo.teacherName}
                gradeLevelDescription={studentInfo.gradeLevelDescription}
              />
            ))}
          </StudentCardContainer>
        </>
      )}
    </SingleClassContainer>
  );
}

SingleClass.propTypes = {
  user: PropTypes.any,
  id: PropTypes.any
};

export default SingleClass;
