import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const getAllStudentsWithDataByUserId = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/StudentWithDetails/user/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getStudentsByClassNameId = (classNameId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/students/className/${classNameId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleStudentWithAssessmentsByStudentId = (studentId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/SingleStudentWithAssessments/studentId/${studentId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createStudent = (student) => new Promise((resolve, reject) => {
  axios
    .post(`${apiURL}/api/students`, student)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateStudent = (studentId, studentObj) => new Promise((resolve, reject) => {
  axios
    .put(`${apiURL}/api/students/${studentId}`, studentObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteStudent = (studentId) => new Promise((resolve, reject) => {
  axios
    .delete(`${apiURL}/api/students/${studentId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  createStudent,
  updateStudent,
  deleteStudent,
  getAllStudentsWithDataByUserId,
  getStudentsByClassNameId,
  getSingleStudentWithAssessmentsByStudentId,
};
