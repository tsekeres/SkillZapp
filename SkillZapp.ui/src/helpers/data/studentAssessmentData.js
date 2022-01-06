import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const createStudentAssessment = (studentAssessmentObj) => new Promise((resolve, reject) => {
  axios
    .post(`${apiURL}/api/studentAssessments`, studentAssessmentObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateStudentAssessment = (studentAssessmentId, studentAssessmentObj) => new Promise((resolve, reject) => {
  axios
    .put(`${apiURL}/api/studentAssessments/${studentAssessmentId}`, studentAssessmentObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// const deleteClassName = (classNameId) =>
//   new Promise((resolve, reject) => {
//     axios
//       .delete(`${apiURL}/api/classNames/${classNameId}`)
//       .then((response) => resolve(response))
//       .catch((error) => reject(error));
//   });

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
};
