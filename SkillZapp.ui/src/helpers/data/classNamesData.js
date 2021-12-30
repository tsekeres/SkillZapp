import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const getAllClassNames = () => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/classNames`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getClassNameById = (classNameId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/classNames/${classNameId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getClassNamesByUserId = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/classNames/user/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getClassNamesWithGradeLevelByUserId = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/ClassNameWithGL/user/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getClassNameWithStudentsByTeacherName = (classNameId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/ClassNameWithStudents/className/${classNameId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createClassName = (className) => new Promise((resolve, reject) => {
  axios
    .post(`${apiURL}/api/classNames`, className)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateClassName = (classNameId, classNameObj) => new Promise((resolve, reject) => {
  axios
    .put(`${apiURL}/api/classNames/${classNameId}`, classNameObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteClassName = (classNameId) => new Promise((resolve, reject) => {
  axios
    .delete(`${apiURL}/api/classNames/${classNameId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getClassNameByTeacherName = (teacherName) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/classNames/${teacherName}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getAllClassNames,
  createClassName,
  updateClassName,
  deleteClassName,
  getClassNameById,
  getClassNamesByUserId,
  getClassNameByTeacherName,
  getClassNamesWithGradeLevelByUserId,
  getClassNameWithStudentsByTeacherName,
};
