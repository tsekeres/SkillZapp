import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import StudentNameCards from '../components/Cards/StudentNameCards';
import {
  SingleClassContainer,
  TitleContainer,
  // ClassSearchContainer,
  // AddClassContainer,
  StudentCardContainer,
  // Button,
} from './SingleClassElements';
import { getClassNameWithStudentsByTeacherName } from '../helpers/data/classNamesData';
// import { getStudentsByClassNameId } from '../helpers/data/studentsData';

function SingleClass() {
  const [className, setClassName] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getClassNameWithStudentsByTeacherName(id).then((resp) => setClassName(resp));
    }
  }, []);

  return (
    <SingleClassContainer>
      {className
        && <><TitleContainer className='classes-header'>
          <h1>
            {className.teacherName}
            {className.gradeLevelDescription}
          </h1>
        </TitleContainer>
        <StudentCardContainer className='card-container class-view'>
          {className?.map((studentInfo, index) => (
            <StudentNameCards
              key={index}
              id={studentInfo.studentId}
              gradeLevelId={studentInfo.gradeLevelId}
              studentName={studentInfo.studentName}
              teacherName={studentInfo.teacherName}
              gradeLevelDescription={studentInfo.gradeLevelDescription}
            />
          ))}
        </StudentCardContainer>
        </>
      }
    </SingleClassContainer>
  );
}

SingleClass.propTypes = {
  user: PropTypes.any,
  id: PropTypes.any
};

export default SingleClass;
