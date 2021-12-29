import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StudentNameCards from '../components/Cards/StudentNameCards';
import {
  SingleClassContainer,
  TitleContainer,
  // ClassSearchContainer,
  // AddClassContainer,
  StudentCardContainer,
  // Button,
} from './SingleClassElements';
import { getClassNamesWithGradeLevelByUserId } from '../helpers/data/classNamesData';
// import { getStudentsByClassNameId } from '../helpers/data/studentsData';

function SingleClass({ user }) {
  const [classNames, setClassNames] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getClassNamesWithGradeLevelByUserId(user.id).then((classList) => setClassNames(classList));
    // getStudentsByClassNameId(className.id).then((studentList) => setStudents(studentList));
  }, []);

  return (
    <SingleClassContainer>
      <TitleContainer className='classes-header'>
        <h1>
          {classNames.teacherName}
          {classNames.gradeLevelDescription}
        </h1>
      </TitleContainer>
      <StudentCardContainer className='card-container class-view'>
        {students?.map((studentInfo) => (
          <StudentNameCards
            key={studentInfo.id}
            id={studentInfo.id}
            setStudents={setStudents}
            gradeLevelId={studentInfo.gradeLevelId}
            studentName={studentInfo.studentName}
            // teacherName={classInfo.teacherName}
            // gradeLevelDescription={classInfo.gradeLevelDescription}
          />
        ))}
      </StudentCardContainer>
    </SingleClassContainer>
  );
}

SingleClass.propTypes = {
  user: PropTypes.any,
};

export default SingleClass;
