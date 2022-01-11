// needs to be clickable to view single class
// needs to display teacher name and gradelevel description or number
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StudentNameCard,
  StudentNameCardBody,
  StudentNameCardButtons,
  StudentNameCardDelete,
  StudentNameCardHeader,
  CardTitle,
  CardText,
  Button1,

} from './StudentNameCardsElements';
import deleted from '../../Assets/Delete.png';
import {
  deleteStudent,
  getAllStudentsWithDataByUserId,
} from '../../helpers/data/studentsData';
import { getClassNameWithStudentsByTeacherName } from '../../helpers/data/classNamesData';

function StudentNameCards({
  studentName,
  teacherName,
  gradeLevelDescription,
  studentId,
  classNameId,
  user,
  setClassName,
  setStudentNames,
}) {
  const history = useHistory();
  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/Students/${classNameId}/${studentName}/${teacherName}/${studentId}`);
        break;
      case 'delete':
        if (classNameId) {
          deleteStudent(studentId).then(() => getClassNameWithStudentsByTeacherName(classNameId).then((resp) => setClassName(resp)));
        } else {
          deleteStudent(studentId).then(() => getAllStudentsWithDataByUserId(user.id).then((resp) => setStudentNames(resp)));
        }
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <StudentNameCard className='StudentCard' id='StudentCard'>
      {studentId && user && (
        <>
          <StudentNameCardHeader className='StudentNameCardHeader'>
            <StudentNameCardButtons className='StudentNameCardButtons'>
              <Button1 id='deleteStudent' onClick={() => handleClick('delete')}>
                <StudentNameCardDelete
                  className='StudentNameCardDelete'
                  src={deleted}
                ></StudentNameCardDelete>
              </Button1>
            </StudentNameCardButtons>
          </StudentNameCardHeader>
          <StudentNameCardBody onClick={() => handleClick('view')}>
            <CardTitle>{studentName}</CardTitle>
            <CardText>{teacherName}</CardText>
            <CardText>{gradeLevelDescription}</CardText>
          </StudentNameCardBody>
        </>
      )}
    </StudentNameCard>
  );
}

StudentNameCards.propTypes = {
  gradeLevelDescription: PropTypes.any,
  studentName: PropTypes.string,
  teacherName: PropTypes.string,
  setClassName: PropTypes.func,
  setStudentNames: PropTypes.func,
  studentId: PropTypes.string,
  classNameId: PropTypes.any,
  user: PropTypes.any,
  setClassNames: PropTypes.func,
  classNames: PropTypes.any,
  setGradeLevels: PropTypes.func,
  gradeLevels: PropTypes.any,
};

export default StudentNameCards;
