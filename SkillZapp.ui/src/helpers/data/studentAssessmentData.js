import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const getStudentAssessmentsByAssessmentId = (assessmentId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/studentsAssessments/assessment/${assessmentId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const GetStudentAssessmentScoresByAssessmentId = (assessmentId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/ChartScores/scores/${assessmentId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createStudentAssessment = (studentAssessmentObj) => new Promise((resolve, reject) => {
  axios
    .post(`${apiURL}/api/studentsAssessments`, studentAssessmentObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateStudentAssessment = (studentAssessmentId, studentAssessmentObj) => new Promise((resolve, reject) => {
  axios
    .put(`${apiURL}/api/studentsAssessments/${studentAssessmentId}`, studentAssessmentObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteStudentAssessment = (studentAssessmentId) => new Promise((resolve, reject) => {
  axios
    .delete(`${apiURL}/api/studentAssessments/${studentAssessmentId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteStudentAssessmentByAssessmentId = (assessmentId) => new Promise((resolve, reject) => {
  axios
    .delete(`${apiURL}/api/studentAssessments/${assessmentId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

// const getClassNameByTeacherName = (teacherName) =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${apiURL}/api/classNames/${teacherName}`)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

export {
  createStudentAssessment,
  updateStudentAssessment,
  deleteStudentAssessment,
  deleteStudentAssessmentByAssessmentId,
  getStudentAssessmentsByAssessmentId,
  GetStudentAssessmentScoresByAssessmentId,
};
