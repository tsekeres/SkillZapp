import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const getAllStandards = () => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/standards`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// const getClassNameById = (classNameId) =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${apiURL}/api/classNames/${classNameId}`)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

// const getClassNamesByUserId = (userId) =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${apiURL}/api/classNames/user/${userId}`)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

// const getClassNamesWithGradeLevelByUserId = (userId) =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${apiURL}/api/ClassNameWithGL/user/${userId}`)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

// const getClassNameWithStudentsByTeacherName = (classNameId) =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${apiURL}/api/ClassNameWithStudents/className/${classNameId}`)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

// const createAssessment = (assessmentObj) =>
//   new Promise((resolve, reject) => {
//     axios
//       .post(`${apiURL}/api/assessments`, assessmentObj)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

// const updateAssessment = (asssessmentId, assessmentObj) =>
//   new Promise((resolve, reject) => {
//     axios
//       .put(`${apiURL}/api/assessments/${assessmentId}`, assessmentObj)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

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

export default getAllStandards;
