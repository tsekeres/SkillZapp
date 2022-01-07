import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  createAssessment, getAssessmentsWithDetailsByUserId
} from '../../helpers/data/assessmentsData';
import {
  AssessmentFormTitle,
  Button,
  Form,
  Label,
  ButtonImg,
  Option,
  Select,
} from './AssessmentFormElements';
import add from '../../Assets/Add.png';

const AssessmentForm = ({
  assessmentFormTitle,
  assessmentDate,
  standards,
  standardId,
  rubrics,
  rubricId,
  classNames,
  classNameId,
  user,
  id,
  closeModal,
  setAssessments,
}) => {
  const history = useHistory();
  const [assessment, setAssessment] = useState({
    standardId: standardId || '',
    classNameId: classNameId || '',
    rubricId: rubricId || '',
    assessmentDate: assessmentDate || '',
    id: id || '',
    userId: user.id || '',
  });
  useEffect(() => {
    let mounted = true;
    const assessmentObj = {
      standardId: standardId || '',
      classNameId: classNameId || '',
      rubricId: rubricId || '',
      assessmentDate: assessmentDate || '',
      id: id || '',
      userId: user.id || '',
    };
    if (mounted) {
      setAssessment(assessmentObj);
    }
    return () => {
      mounted = false;
      return mounted;
    };
  }, [standardId, classNameId, rubricId, id]);

  const handleInputChange = (e) => {
    setAssessment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const assessmentObj = {
      standardId: assessment.standardId,
      classNameId: assessment.classNameId,
      rubricId: assessment.rubricId,
      userId: user.id,
    };
    createAssessment(assessmentObj).then((resp) => history.push(`/TakeAssessment/${resp.rubricId}/${resp.standardId}/${resp.classNameId}/${resp.id}`))
      .then(getAssessmentsWithDetailsByUserId(user.id).then((assessList) => setAssessments(assessList)));

    closeModal();
  };

  return (
    <Form id='addAssessmentForm' autoComplete='off' onSubmit={handleSubmit}>
      <AssessmentFormTitle id='AssessmentFormTitle'>
        {assessmentFormTitle}
      </AssessmentFormTitle>

      <Label>Standard:</Label>
      <Select
        className='item'
        type='select'
        name='standardId'
        placeholder='Standard'
        id='exampleSelect'
        onChange={handleInputChange}
      >
        <Option value=''>Select Standard</Option>
        {standards?.map((standardObj) => (
          <Option key={standardObj.id} value={standardObj.id}>
            {standardObj.standardName}
          </Option>
        ))}
        ;
      </Select>

      <Label>Rubric:</Label>
      <Select
        className='item'
        type='select'
        name='rubricId'
        placeholder='Rubric'
        id='exampleSelect'
        onChange={handleInputChange}
      >
        <Option value=''>Select Rubric</Option>
        {rubrics?.map((rubricObj) => (
          <Option key={rubricObj.id} value={rubricObj.id}>
            {rubricObj.rubricName}
          </Option>
        ))}
        ;
      </Select>
      <Label>Class Name:</Label>
      <Select
        className='item'
        type='select'
        name='classNameId'
        placeholder='Class Name'
        id='exampleSelect'
        onChange={handleInputChange}
      >
        <Option value=''>Select Class Name</Option>
        {classNames?.map((classNameObj) => (
          <Option key={classNameObj.id} value={classNameObj.id}>
            {classNameObj.teacherName}
          </Option>
        ))}
        ;
      </Select>
      <Button className='addAssessment' type='submit'>
        <ButtonImg src={add}></ButtonImg>
      </Button>
    </Form>
  );
};

AssessmentForm.propTypes = {
  assessmentFormTitle: PropTypes.string.isRequired,
  assessmentDate: PropTypes.any,
  rubrics: PropTypes.any,
  rubricId: PropTypes.any,
  classNameId: PropTypes.any,
  classNames: PropTypes.any,
  standardId: PropTypes.any,
  standards: PropTypes.any,
  user: PropTypes.any,
  id: PropTypes.string,
  setClassNames: PropTypes.func,
  setStandards: PropTypes.func,
  setRubrics: PropTypes.func,
  setAssessments: PropTypes.func,
  closeModal: PropTypes.func,
};

export default AssessmentForm;
