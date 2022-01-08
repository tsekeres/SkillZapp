import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, FormGroup, Label } from 'reactstrap';
import {
  TakeAssessmentCard,
  TakeAssessmentCardHeader,
  TakeAssessmentCardBody,
} from './TakeAssessmentCardsElements';
import { updateStudentAssessment, createStudentAssessment } from '../../helpers/data/studentAssessmentData';
import getTakeAssessmentByAssessmentId from '../../helpers/data/takeAssessmentsData';

function TakeAssessmentCards({
  user,
  id,
  classNameId,
  studentName,
  studentId,
  assessmentId,
  teacherName,
  gradeLevelDescription,
  standardName,
  assessmentDate,
  score,
  setTakeAssessments,
  // rubricLevelA,
  // rubricLevelB,
  // rubricLevelC,
  // rubricLevelD,
}) {
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [checkBox4, setCheckBox4] = useState(false);
  const [finAssess, setFinAssess] = useState({
    studentId: studentId || '',
    classNameId: classNameId || '',
    id: id || '',
    userId: user.id || '',
    assessmentId: assessmentId || '',
    studentName: studentName || '',
    teacherName: teacherName || '',
    gradeLevelDescription: gradeLevelDescription || '',
    standardName: standardName || '',
    assessmentDate: assessmentDate || '',
    score: score || '',
  });
  useEffect(() => {
    let mounted = true;
    const studentAssessmentObj = {
      studentId: studentId || '',
      classNameId: classNameId || '',
      id: id || '',
      userId: user.id || '',
      assessmentId: assessmentId || '',
      studentName: studentName || '',
      teacherName: teacherName || '',
      gradeLevelDescription: gradeLevelDescription || '',
      standardName: standardName || '',
      assessmentDate: assessmentDate || '',
      score: score || '',
    };
    if (mounted) {
      setFinAssess(studentAssessmentObj);
    }
    return () => {
      mounted = false;
      return mounted;
    };
  }, []);

  const handleCheck1 = (e) => {
    e.preventDefault();
    setCheckBox1(true);
    setCheckBox2(false);
    setCheckBox3(false);
    setCheckBox4(false);
    setFinAssess((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (id !== '00000000-0000-0000-0000-000000000000') {
      updateStudentAssessment(finAssess.id, finAssess);
    } else {
      const studentAssessmentObj = {
        studentId: finAssess.studentId || '',
        classNameId: finAssess.classNameId || '',
        userId: finAssess.userId || '',
        assessmentId: finAssess.assessmentId || '',
        studentName: finAssess.studentName || '',
        teacherName: finAssess.teacherName || '',
        gradeLevelDescription: finAssess.gradeLevelDescription || '',
        standardName: finAssess.standardName || '',
        assessmentDate: finAssess.assessmentDate || '',
        score: 'Excellent',
      };
      createStudentAssessment(studentAssessmentObj).then(() => getTakeAssessmentByAssessmentId(assessmentId).then((takeAssessList) => setTakeAssessments(takeAssessList)));
    }
  };
  const handleCheck2 = (e) => {
    e.preventDefault();
    setCheckBox1(false);
    setCheckBox2(true);
    setCheckBox3(false);
    setCheckBox4(false);
    setFinAssess((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (id !== '00000000-0000-0000-0000-000000000000') {
      updateStudentAssessment(finAssess.id, finAssess);
    } else {
      const studentAssessmentObj = {
        studentId: finAssess.studentId || '',
        classNameId: finAssess.classNameId || '',
        userId: finAssess.userId || '',
        assessmentId: finAssess.assessmentId || '',
        studentName: finAssess.studentName || '',
        teacherName: finAssess.teacherName || '',
        gradeLevelDescription: finAssess.gradeLevelDescription || '',
        standardName: finAssess.standardName || '',
        assessmentDate: finAssess.assessmentDate || '',
        score: 'Satisfactory',
      };
      createStudentAssessment(studentAssessmentObj).then(() => getTakeAssessmentByAssessmentId(assessmentId).then((takeAssessList) => setTakeAssessments(takeAssessList)));
    }
  };
  const handleCheck3 = (e) => {
    e.preventDefault();
    setCheckBox1(false);
    setCheckBox2(false);
    setCheckBox3(true);
    setCheckBox4(false);
    setFinAssess((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (id !== '00000000-0000-0000-0000-000000000000') {
      updateStudentAssessment(finAssess.id, finAssess);
    } else {
      const studentAssessmentObj = {
        studentId: finAssess.studentId || '',
        classNameId: finAssess.classNameId || '',
        userId: finAssess.userId || '',
        assessmentId: finAssess.assessmentId || '',
        studentName: finAssess.studentName || '',
        teacherName: finAssess.teacherName || '',
        gradeLevelDescription: finAssess.gradeLevelDescription || '',
        standardName: finAssess.standardName || '',
        assessmentDate: finAssess.assessmentDate || '',
        score: 'Needs Improvement',
      };
      createStudentAssessment(studentAssessmentObj).then(() => getTakeAssessmentByAssessmentId(assessmentId).then((takeAssessList) => setTakeAssessments(takeAssessList)));
    }
  };
  const handleCheck4 = (e) => {
    e.preventDefault();
    setCheckBox1(false);
    setCheckBox2(false);
    setCheckBox3(false);
    setCheckBox4(true);
    setFinAssess((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (id !== '00000000-0000-0000-0000-000000000000') {
      updateStudentAssessment(finAssess.id, finAssess);
    } else {
      const studentAssessmentObj = {
        studentId: finAssess.studentId || '',
        classNameId: finAssess.classNameId || '',
        userId: finAssess.userId || '',
        assessmentId: finAssess.assessmentId || '',
        studentName: finAssess.studentName || '',
        teacherName: finAssess.teacherName || '',
        gradeLevelDescription: finAssess.gradeLevelDescription || '',
        standardName: finAssess.standardName || '',
        assessmentDate: finAssess.assessmentDate || '',
        score: 'Not Tested',
      };
      createStudentAssessment(studentAssessmentObj).then(() => getTakeAssessmentByAssessmentId(assessmentId).then((takeAssessList) => setTakeAssessments(takeAssessList)));
    }
  };

  return (
    <TakeAssessmentCard>
      <TakeAssessmentCardHeader className='ClassCardHeader'>
        <h3>{studentName}</h3>
      </TakeAssessmentCardHeader>
      <TakeAssessmentCardBody className='ClassCard' id='ClassCard'>
        <FormGroup tag='fieldset'>
          <legend>Rubric Score</legend>
          <FormGroup>
            <Input
              name='score'
              type='checkbox'
              value='Excellent'
              checked={checkBox1}
              onChange={handleCheck1}
            />
            <Label check>Excellent</Label>
          </FormGroup>
          <FormGroup>
            <Input
              name='score'
              type='checkbox'
              value='Satisfactory'
              checked={checkBox2}
              onChange={handleCheck2}
            />
            <Label check>Satisfactory</Label>
          </FormGroup>
          <FormGroup>
            <Input
              name='score'
              type='checkbox'
              value='Needs Improvement'
              checked={checkBox3}
              onChange={handleCheck3}
            />
            <Label check>Needs Improvement</Label>
          </FormGroup>
          <FormGroup>
            <Input
              name='score'
              type='checkbox'
              value='Not Tested'
              checked={checkBox4}
              onChange={handleCheck4}
            />
            <Label check>Not Tested</Label>
          </FormGroup>
        </FormGroup>
      </TakeAssessmentCardBody>
    </TakeAssessmentCard>
  );
}

TakeAssessmentCards.propTypes = {
  id: PropTypes.any,
  classNameId: PropTypes.any,
  studentName: PropTypes.any,
  user: PropTypes.any,
  studentId: PropTypes.any,
  assessmentId: PropTypes.any,
  teacherName: PropTypes.any,
  gradeLevelDescription: PropTypes.any,
  standardName: PropTypes.any,
  assessmentDate: PropTypes.any,
  score: PropTypes.any,
  setTakeAssessments: PropTypes.func,
  rubricLevelA: PropTypes.any,
  rubricLevelB: PropTypes.any,
  rubricLevelC: PropTypes.any,
  rubricLevelD: PropTypes.any,
};

export default TakeAssessmentCards;
