import * as REGISTRATION_TYPES from '../types/registrationTypes';
import { GENDER_TYPES } from '../../components/Patient/Registration/constants';

const CUS = 'CUS';

const initialState = {
  // general
  generalInfo: {
    password: '',
    phoneNumber: '',
    repeatPassword: '',
    userType: CUS,
  },
  generalErrors: {
    phoneNumber: [],
  },
  generalSuccess: false,
  generalLoading: false,

  // confirmation
  confirmationInfo: {
    confirmPassword: '',
  },
  confirmationErrors: {
    password: [],
    phoneNumber: [],
    repeatPassword: [],
    confirmPhone: [],
  },
  confirmationLoading: false,
  confirmationSuccess: false,

  // personal
  personalInfo: {
    firstName: '',
    lastName: '',
    nationalId: '',
    dateOfBirth: '',
    gender: GENDER_TYPES[0],
    country: '',
    city: '',
    direction: '',
    houseNumber: '',
    apartmentNumber: '',
    floorNumber: '',
    zipCode: '',
    email: '',
  },
  personalErrors: {
    firstName: [],
    lastName: [],
    nationalId: [],
    dateOfBirth: [],
    gender: [],
    country: [],
    city: [],
    direction: [],
    houseNumber: [],
    apartmentNumber: [],
    floor: [],
    zipCode: [],
    email: [],
  },
  personalLoading: false,
  personalSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_TYPES.GENERAL_INFO_REQUEST: {
      return {
        ...state,
        generalLoading: true,
      };
    }
    case REGISTRATION_TYPES.GENERAL_INFO_SUCCESS: {
      return {
        ...state,
        generalSuccess: true,
        generalLoading: false,
        generalInfo: action.payload,
      };
    }
    case REGISTRATION_TYPES.GENERAL_INFO_FAIL: {
      return {
        ...state,
        generalErrors: action.payload,
        generalLoading: false,
      };
    }
    case REGISTRATION_TYPES.CONFIRMATION_REQUEST: {
      return {
        ...state,
        confirmationLoading: true,
      };
    }

    case REGISTRATION_TYPES.CONFIRMATION_SUCCESS: {
      return {
        ...state,
        confirmationSuccess: true,
        confirmationLoading: false,
        confirmationInfo: action.payload,
      };
    }

    case REGISTRATION_TYPES.CONFIRMATION_FAIL: {
      return {
        ...state,
        confirmationErrors: action.data,
        confirmationLoading: false,
      };
    }

    case REGISTRATION_TYPES.PERSONAL_INFO_REQUEST: {
      return {
        ...state,
        personalInfoLoading: true,
      };
    }
    case REGISTRATION_TYPES.PERSONAL_INFO_SUCCESS: {
      return {
        ...state,
        personalInfoSuccess: true,
        personalInfoLoading: false,
        personalInfo: action.payload,
      };
    }
    case REGISTRATION_TYPES.PERSONAL_INFO_FAIL: {
      return {
        ...state,
        personalInfoErrors: action.payload,
        personalInfoLoading: false,
      };
    }

    default:
      return state;
  }
};
