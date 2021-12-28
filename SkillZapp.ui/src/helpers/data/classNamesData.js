import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

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
    .get(`${apiURL}/api/classNames/user/${userId}`)
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

// const searchClassesList = (teacherName) => new Promise((resolve, reject) => {
//   GetClassNamesByUserId(userId).then((classNamesArray) => {
//     const searchItems = classNamesArray.filter((class) => class.teacherName.includes(teacherName));
//     resolve(searchItems);
//   }).catch((error) => reject(error));
// });

export {
  createClassName,
  updateClassName,
  deleteClassName,
  getClassNameById,
  getClassNamesByUserId,
  getClassNameByTeacherName,
  getClassNamesWithGradeLevelByUserId,
  // searchClassesList,
};
