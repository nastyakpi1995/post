import getENV from '../utils/getEnv';

const ENVData = {
  development: {
    api: 'https://back-dev-freelance.scenario-projects.com/v1/',
    ws: 'wss://back-dev-freelance.scenario-projects.com/ws/connector/',
  },
  stage: {
    api: 'https://back-stage-freelance.scenario-projects.com/v1/',
    ws: 'wss://back-stage-freelance.scenario-projects.com/ws/connector/',
  },
};

export default ENVData[getENV()];
