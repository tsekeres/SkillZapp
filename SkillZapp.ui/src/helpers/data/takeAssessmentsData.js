import axios from 'axios';
import { SkillZappConfig } from '../apiKeys';

const apiURL = SkillZappConfig.baseUrl;

const getTakeAssessmentByAssessmentId = (assessmentId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/takeAssessment/${assessmentId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getTakeAssessmentByAssessmentId;
