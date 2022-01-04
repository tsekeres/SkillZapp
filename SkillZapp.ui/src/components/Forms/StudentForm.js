import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {
  createStudent,
  updateStudent,
} from '../../helpers/data/studentsData';
import {
  StudentFormTitle,
  FormHeader,
  Button,
  Form,
  Label,
  ButtonImg,
  Option,
  Select,
} from './StudentFormElements';
import add from '../../Assets/Add.png';
import { getClassNameWithStudentsByTeacherName } from '../../helpers/data/classNamesData';

const StudentForm = ({
  studentFormTitle,
  studentName,
  gradeLevelId,
  gradeLevels,
  classNames,
  classNameId,
  user,
  className,
  setClassName,
  closeModal,
}) => {
  // console.warn(studentName);
  const [student, setStudent] = useState({
    gradeLevelId: gradeLevelId || '',
    classNameId: classNameId || '',
    studentName: studentName || '',
    id: className.studentId || '',
    userId: user.id || '',
  });
  console.warn(classNameId);
  useEffect(() => {
    let mounted = true;
    const studentObj = {
      gradeLevelId: gradeLevelId || '',
      classNameId: classNameId || '',
      studentName: studentName || '',
      id: className.studentId || '',
      userId: user.id || '',
    };
    if (mounted) {
      setStudent(studentObj);
    }
    return () => {
      mounted = false;
      return mounted;
    };
  }, [gradeLevelId, classNameId, studentName, className.id]);

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.id) {
      updateStudent(student.id, student).then(() => getClassNameWithStudentsByTeacherName(classNameId).then((classList) => setClassName(classList)));
      closeModal();
    } else {
      const studentObj = {
        gradeLevelId: student.gradeLevelId || '',
        classNameId: student.classNameId || '',
        studentName: student.studentName || '',
        userId: user.id || '',
      };
      createStudent(studentObj).then(() => getClassNameWithStudentsByTeacherName(classNameId).then((classList) => setClassName(classList)));

      closeModal();
    }
  };

  return (
    <Form id='addStudentForm' autoComplete='off' onSubmit={handleSubmit}>
      <StudentFormTitle id='StudentFormTitle'>
        {studentFormTitle}
      </StudentFormTitle>
      <FormHeader>
        <h2>Add a new student with the form below.</h2>
      </FormHeader>
      <Label studentName='StudentNameLabel'> Student Name:</Label>
      <Input
        name='studentName'
        id='studentName'
        value={student.studentName}
        type='text'
        placeholder='Enter a Student Name'
        onChange={handleInputChange}
      ></Input>
      <Label>Grade Level:</Label>
      <Select
        className='item'
        type='select'
        name='gradeLevelId'
        placeholder='Grade Level'
        id='exampleSelect'
        onChange={handleInputChange}
      >
        <Option value=''>Select Grade Level</Option>
        {gradeLevels?.map((gradeLevel) => (
          <Option key={gradeLevel.id} value={gradeLevel.id}>
            {gradeLevel.gradeLevelNumber}
          </Option>
        ))}
        ;
      </Select>
      <Label>Teacher Name:</Label>
      <Select
        className='item'
        type='select'
        name='classNameId'
        placeholder='Teacher Name'
        id='exampleSelect'
        onChange={handleInputChange}
      >
        <Option value=''>Select Teacher Name</Option>
        {classNames?.map((teacherName) => (
          <Option key={teacherName.id} value={teacherName.id}>
            {teacherName.teacherName}
          </Option>
        ))}
        ;
      </Select>
      <Button className='addStudent' type='submit'>
        <ButtonImg src={add}></ButtonImg>
      </Button>
    </Form>
  );
};

StudentForm.propTypes = {
  studentFormTitle: PropTypes.string.isRequired,
  gradeLevels: PropTypes.any,
  studentName: PropTypes.string,
  gradeLevelId: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.any,
  setClassName: PropTypes.func,
  closeModal: PropTypes.func,
  classNames: PropTypes.any,
  className: PropTypes.any,
  classNameId: PropTypes.string,
};

export default StudentForm;
