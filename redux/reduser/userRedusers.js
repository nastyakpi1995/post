import FETCH_TYPES from '../types';

const defaultState = {
  totalLength: 0,
  perPage: 5,
  endPage: 5,
  pagesQuantity: 1,
  currentPage: 1,
  startRange: 0,
  postsData: null,
  userPutSuccess: false,
  userLoading: false,
  currentUser: '',
  userErrors: {
    name: [],
    surname: [],
    desc: [],
  },
};

// -------- Reducer --------

export default (state = defaultState, action) => {
  debugger
  switch (action.type) {
    case FETCH_TYPES.GET_REQUEST: {
      return {
        ...state,
        userLoading: true,
        postsData: action.data,
      };
    }

    case FETCH_TYPES.GET_SUCCESS: {
      return {
        ...state,
        userLoading: false,
        postsData: action.data,
        totalLength: action.data.length,
        pagesQuantity: Math.ceil(action.data.length / state.perPage),
        userErrors: {
          name: [],
          surname: [],
          desc: [],
        },
      };
    }

    case FETCH_TYPES.GET_FAIL: {
      return {
        ...state,
        userErrors: action.data,
        userPutSuccess: false,
        userLoading: false,
      };
    }

    case FETCH_TYPES.POST_REQUEST: {
      return {
        ...state,
        userLoading: true,
      };
    }

    case FETCH_TYPES.POST_SUCCESS: {
      return {
        ...state,
        userPutSuccess: true,
        userLoading: false,
        postsData: action.data,
        pagesQuantity: Math.ceil(action.data.length / state.perPage),
        userErrors: {
          name: [],
          surname: [],
          desc: [],
        },
      };
    }

    case FETCH_TYPES.POST_FAIL: {
      return {
        ...state,
        userErrors: action.data,
        userPutSuccess: false,
        userLoading: false,
      };
    }

    case FETCH_TYPES.DELETE_REQUEST: {
      return {
        ...state,
        userLoading: true,
      };
    }

    case FETCH_TYPES.DELETE_SUCCESS: {
      return {
        ...state,
        userLoading: false,
        postsData: action.data,
        pagesQuantity: Math.ceil(action.data.length / state.perPage),
        startRange: 0,
        endPage: state.perPage,
        userErrors: {
          name: [],
          surname: [],
          desc: [],
        },
      };
    }

    case FETCH_TYPES.DELETE_FAIL: {
      return {
        ...state,
        userPutSuccess: false,
        userLoading: false,
      };
    }


    case FETCH_TYPES.PUT_REQUEST: {
      return {
        ...state,
        userLoading: true,
      };
    }

    case FETCH_TYPES.PUT_SUCCESS: {
      return {
        ...state,
        userPutSuccess: true,
        userLoading: false,
        postsData: action.data,
        pagesQuantity: Math.ceil(action.data.length / state.perPage),
      };
    }

    case FETCH_TYPES.PUT_FAIL: {
      return {
        ...state,
        userPutSuccess: false,
        userLoading: false,
        userErrors: action.data,
      };
    }

    case FETCH_TYPES.SET_CURRENT_PAGE: {
      const endPage = action.currentPage * state.perPage;

      return {
        ...state,
        endPage,
        currentPage: action.currentPage,
        pagesQuantity: Math.ceil(state.postsData.length / state.perPage),
        startRange: endPage - state.perPage,
      };
    }

    case FETCH_TYPES.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.id,
      };
    }


    case FETCH_TYPES.CAST_ALL_ERRORS: {
      return {
        ...state,
        userPutSuccess: false,
        userErrors: {
          name: [],
          surname: [],
          desc: [],
        },
      };
    }

    case FETCH_TYPES.SET_COUNT_PAGES: {
      const perPage = action.perPage ? 3 : 5;

      return {
        ...state,
        perPage,
        pagesQuantity: Math.ceil(state.postsData.length / perPage),
        startRange: 0,
        endPage: perPage,
        currentPage: 1,
      }
    }

    default: {
      return state;
    }
  }
};
