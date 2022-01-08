import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { createClassName, updateClassName, getClassNamesWithGradeLevelByUserId } from '../../helpers/data/classNamesData';
import {
  ClassFormTitle,
  Button,
  Form,
  Label,
  ButtonImg,
  Option,
  Select,
} from './ClassFormElements';
import add from '../../Assets/Add.png';

const ClassForm = ({
  classFormTitle,
  gradeLevels,
  // classNames,
  teacherName,
  id,
  gradeLevelId,
  user,
  setClassNames,
  closeModal,
}) => {
  // console.warn(teacherName);
  const [className, setClassName] = useState({
    gradeLevelId: gradeLevelId || '',
    teacherName: teacherName || '',
    id: id || '',
    userId: user.id || '',
  });

  useEffect(() => {
    let mounted = true;
    const classNameObj = {
      gradeLevelId: gradeLevelId || '',
      teacherName: teacherName || '',
      id: id || '',
      userId: user.id || '',
    };
    if (mounted) {
      setClassName(classNameObj);
    }
    return () => {
      mounted = false;
      return mounted;
    };
  }, [gradeLevelId, teacherName, id]);

  const handleInputChange = (e) => {
    setClassName((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateClassName(id, className).then(() => getClassNamesWithGradeLevelByUserId(user.id).then((classList) => setClassNames(classList)));
      closeModal();
    } else {
      const classNameObj = {
        gradeLevelId: className.gradeLevelId,
        teacherName: className.teacherName,
        userId: user.id,
      };
      createClassName(classNameObj).then(() => getClassNamesWithGradeLevelByUserId(user.id).then((classList) => setClassNames(classList)));

      closeModal();
    }
  };
  // console.warn(className);

  return (
    <Form id='addClassNameForm' autoComplete='off' onSubmit={handleSubmit}>
      <ClassFormTitle id='ClassFormTitle'>{classFormTitle}</ClassFormTitle>
      <Label className='ClassNameNameLabel'> Teacher Name:</Label>
      <Input
        name='teacherName'
        id='teacherName'
        value={className.teacherName}
        type='text'
        placeholder='Enter a Teacher Name'
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
        <Option value=''>
          Select Grade Level
        </Option>
        {gradeLevels?.map((gradeLevel) => (
          <Option key={gradeLevel.id} value={gradeLevel.id}>
            {gradeLevel.gradeLevelNumber}
          </Option>
        ))};
      </Select>
      <Button className='addClassName' type='submit'>
        <ButtonImg src={add}></ButtonImg>
      </Button>
    </Form>
  );
};

ClassForm.propTypes = {
  classFormTitle: PropTypes.string.isRequired,
  gradeLevels: PropTypes.any,
  classNames: PropTypes.any,
  teacherName: PropTypes.string,
  gradeLevelId: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.any,
  setClassNames: PropTypes.func,
  closeModal: PropTypes.func,
};

export default ClassForm;
