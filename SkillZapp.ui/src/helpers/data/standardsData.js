import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const getAllStandards = () => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/standards`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getAllStandards;
