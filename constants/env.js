import getENV from '../utils/getEnv';

const ENVData = {
  development: {
    api: 'https://docwoo-back-dev.scenario-projects.com',
  },
  stage: {
    api: 'https://docwoo-back-stage.scenario-projects.com',
  },
};

export default ENVData[getENV()];
