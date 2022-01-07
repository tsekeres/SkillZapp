import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const getAllRubrics = () => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/rubrics`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getRubricById = (rubricId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/rubrics/${rubricId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getAllRubrics, getRubricById };
