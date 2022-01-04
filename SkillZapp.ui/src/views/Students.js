// needs an add a new class button that opens modal form
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StudentNameCards from '../components/Cards/StudentNameCards';
// import StudentForm from '../components/Forms/StudentForm';
import { getAllStudentsWithDataByUserId } from '../helpers/data/studentsData';
// import getAllGradeLevels from '../helpers/data/gradeLevelsData';
// import { getAllClassNames } from '../helpers/data/classNamesData';
// import deleted from '../Assets/Delete.png';
// import SearchBarStudents from '../components/Searchbar/SearchBarStudents';
import {
  StudentContainer,
  TitleContainer,
  // AddButtonContainer,
  // AddStudentButton,
  // Modal,
  // Button,
  // ButtonImg,
  // ClassSearchContainer,
  // AddClassContainer,
  StudentCardContainer,
  // Button,
} from './StudentsElements';

function Students({ user }) {
  const [studentNames, setStudentNames] = useState(null);
  // const [gradeLevels, setGradeLevels] = useState(null);
  // const [classNames, setClassNames] = useState(null);
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  useEffect(() => {
    if (user) {
      getAllStudentsWithDataByUserId(user.id).then((resp) => setStudentNames(resp));
      // getAllGradeLevels().then((gradeLevelsList) => setGradeLevels(gradeLevelsList));
      // getAllClassNames().then((classNamesList) => setClassNames(classNamesList));
    }
  }, []);

  return (
    <StudentContainer>
      <TitleContainer className="classes-header">
        <h1>All Students</h1>
      </TitleContainer>
      {/* <SearchBarStudents user={user} /> */}
      {/* <AddButtonContainer className="AddButtonContainer">
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
          setStudentNames={setStudentNames}
          studentNames={studentNames}
          user={user}
          closeModal={closeModal}
        />
      </Modal> */}
      <StudentCardContainer className="card-container student-view">
        {studentNames
          && studentNames.map((studentInfo, index) => (
            <StudentNameCards
              key={index}
              id={studentInfo.studentId}
              studentName={studentInfo.studentName}
              teacherName={studentInfo.teacherName}
              gradeLevelDescription={studentInfo.gradeLevelDescription}
            />
          ))}
      </StudentCardContainer>
    </StudentContainer>
  );
}

Students.propTypes = {
  user: PropTypes.any,
};

export default Students;
