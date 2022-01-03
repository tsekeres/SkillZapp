import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const getAllRubrics = () => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/rubrics`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getAllRubrics;
