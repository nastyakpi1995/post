const defaultState = {};

// -------- Reducer --------

export default function (state, action) {
  if (!state) return defaultState;

  switch (action.type) {
    case 'MUTATION_TYPE_1': {
      return { ...state, ...action.payload };
    }

    default: {
      return state;
    }
  }
}
