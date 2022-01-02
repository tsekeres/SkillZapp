import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createAssessment } from '../../helpers/data/assessmentsData';
import {
  assessmentFormTitle,
  Button,
  Form,
  Label,
  ButtonImg,
  Option,
  Select,
} from './AssessmentFormElements';
import add from '../../Assets/Add.png';
import { classNames } from 'react-select/dist/declarations/src/utils';

const AssessmentForm = ({
  assessmentFormTitle,
  setRubrics,
  setStandards,
  standards,
  rubrics,
  classNames,
  user,
  id,
  setClassNames,
  closeModal,
}) => {
  const [assessment, setAssessment] = useState({
    standardId: standardId || '',
    classNameId: classNameId || '',
    rubricId: rubricId || '',
    id: id || '',
    userId: user.id || '',
  });
  useEffect(() => {
    let mounted = true;
    const assessmentObj = {
      standardId: standardId || '',
      classNameId: classNameId || '',
      rubricId: rubricId || '',
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
    setClassName((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateAssessment(id, assessment).then(() => getAssessmentsWithStudentScoresByAssessmentId(assessmentId).then((assessList) => setAssessments(assessList)));
      closeModal();
    } else {
      const assessmentObj = {
        standardId: assessment.standardId,
        classNameId: assessment.classNameId,
        rubricId: assessment.rubricId,
        userId: user.id,
      };
      createAssessment(assessmentObj).then(() => getAssessmentsWithStudentScoresByAssessmentId(assessmentId).then((assessList) => setAssessments(assessList)));

      closeModal();
    }
  };

  return (
    <Form id="addAssessmentForm" autoComplete="off" onSubmit={handleSubmit}>
      <AssessmentFormTitle id="AssessmentFormTitle">
        {classFormTitle}
      </AssessmentFormTitle>

      <Label>Class Name:</Label>
      <Select
        className="item"
        type="select"
        name="className"
        placeholder="Class Name"
        id="exampleSelect"
        onChange={handleInputChange}
      >
        <Option value="">Select Class Name</Option>
        {classNames?.map((classNameObj) => (
          <Option key={classNameObj.id} value={classNameObj.id}>
            {classNameObj.teacherName}
          </Option>
        ))}
        ;
      </Select>

      <Label>Standard:</Label>
      <Select
        className="item"
        type="select"
        name="standardId"
        placeholder="Standard"
        id="exampleSelect"
        onChange={handleInputChange}
      >
        <Option value="">Select Standard</Option>
        {standards?.map((standardObj) => (
          <Option key={standardObj.id} value={standardObj.id}>
            {standardObj.standardName}
          </Option>
        ))}
        ;
      </Select>

      <Label>Rubric:</Label>
      <Select
        className="item"
        type="select"
        name="rubricId"
        placeholder="Rubric"
        id="exampleSelect"
        onChange={handleInputChange}
      >
        <Option value="">Select Rubric</Option>
        {rubrics?.map((rubricObj) => (
          <Option key={rubricObj.id} value={rubricObj.id}>
            {rubricObj.rubricName}
          </Option>
        ))}
        ;
      </Select>
      <Button className="addAssessment" type="submit">
        <ButtonImg src={add}></ButtonImg>
      </Button>
    </Form>
  );
};

AssessmentForm.propTypes = {
  assessmentFormTitle: PropTypes.string.isRequired,
  rubrics: PropTypes.any,
  classNames: PropTypes.any,
  standards: PropTypes.any,
  user: PropTypes.any,
  id: PropTypes.string,
  setClassNames: PropTypes.func,
  setStandards: PropTypes.func,
  setRubrics: PropTypes.func,
  closeModal: PropTypes.func,
};

export default AssessmentForm;
