import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const getComponents = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${apiURL}/api/components`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

const getSingleComponent = (componentId) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${apiURL}/api/components/${componentId}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

const addComponent = (componentName) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${apiURL}/api/components`, componentName)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

const updateComponent = (componentId, componentObj) =>
  new Promise((resolve, reject) => {
    axios
      .put(`${apiURL}/api/Components/${componentId}`, componentObj)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

const deleteComponent = (componentId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${apiURL}/api/components/${componentId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });

const getComponentByName = (componentName) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${apiURL}/api/component/${componentName}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

const getComponentByStateName = (stateName) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${apiURL}/api/component/${stateName}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });

export {
  getComponents,
  getSingleComponent,
  addComponent,
  updateComponent,
  deleteComponent,
  getComponentByName,
  getComponentByStateName,
};
