import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const addUser = (user) => new Promise((resolve, reject) => {
  axios.post(`${apiURL}/api/users`, user)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default addUser;
