import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const getAllGradeLevels = () => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/gradeLevels`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getAllGradeLevels;
