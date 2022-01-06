import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, FormGroup, Label } from 'reactstrap';
import {
  TakeAssessmentCard,
  TakeAssessmentCardHeader,
  TakeAssessmentCardBody,
} from './TakeAssessmentCardsElements';
import { updateStudentAssessment, createStudentAssessment } from '../../helpers/data/studentAssessmentData';

function TakeAssessmentCards({
  takeAssessments
}) {
  const [finAssess, setFinAssess] = useState({
    studentId: takeAssessments.studentId || '',
    classNameId: takeAssessments.classNameId || '',
    id: takeAssessments.Id || '',
    userId: takeAssessments.userId || '',
    assessmentId: takeAssessments.assessmentId || '',
    studentName: takeAssessments.studentName || '',
    teacherName: takeAssessments.teacherName || '',
    gradeLevelDescription: takeAssessments.gradeLevelDescription || '',
    standardName: takeAssessments.standardName || '',
    score: takeAssessments.score || '',
  });

  useEffect(() => {
    let mounted = true;
    const studentAssessmentObj = {
      studentId: takeAssessments.studentId || '',
      classNameId: takeAssessments.classNameId || '',
      id: takeAssessments.Id || '',
      userId: takeAssessments.userId || '',
      assessmentId: takeAssessments.assessmentId || '',
      studentName: takeAssessments.studentName || '',
      teacherName: takeAssessments.teacherName || '',
      gradeLevelDescription: takeAssessments.gradeLevelDescription || '',
      standardName: takeAssessments.standardName || '',
      score: takeAssessments.score || '',
    };
    if (mounted) {
      setFinAssess(studentAssessmentObj);
    }
    return () => {
      mounted = false;
      return mounted;
    };
  }, []);

  const handleInputChange = (e) => {
    setFinAssess((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();

    if (finAssess.id === '') {
      const studentAssessmentObj = {
        studentId: finAssess.studentId || '',
        classNameId: finAssess.classNameId || '',
        userId: finAssess.userId || '',
        assessmentId: finAssess.assessmentId || '',
        studentName: finAssess.studentName || '',
        teacherName: finAssess.teacherName || '',
        gradeLevelDescription: finAssess.gradeLevelDescription || '',
        standardName: finAssess.standardName || '',
        score: finAssess.score || '',
      };

      createStudentAssessment(studentAssessmentObj);
    } else {
      updateStudentAssessment(finAssess.id, finAssess);
    }
  };

  return (
    <TakeAssessmentCard>
      <TakeAssessmentCardHeader className='ClassCardHeader'>
        <h1>{takeAssessments.studentName}</h1>
      </TakeAssessmentCardHeader>
      <TakeAssessmentCardBody
        className='ClassCard'
        id='ClassCard'
      ></TakeAssessmentCardBody>
      <FormGroup tag='fieldset'>
        <legend>Rubric Score</legend>
        <FormGroup check>
          <Input
            name='score'
            type='radio'
            value={takeAssessments.rubricLevelA}
            onChange={handleInputChange}
          />
          <Label check>Excellent</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name='score'
            type='radio'
            value={takeAssessments.rubricLevelB}
            onChange={handleInputChange}
          />
          <Label check>Satisfactory</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name='score'
            type='radio'
            value={takeAssessments.rubricLevelC}
            onChange={handleInputChange}
          />
          <Label check>Needs Improvement</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name='score'
            type='radio'
            value={takeAssessments.rubricLevelD}
            onChange={handleInputChange}
          />
          <Label check>Not Tested</Label>
        </FormGroup>
      </FormGroup>
      ;
    </TakeAssessmentCard>
  );
}

TakeAssessmentCards.propTypes = {
  takeAssessments: PropTypes.any,
};

export default TakeAssessmentCards;
