// -------- Classic action creator --------

export const classicActionCreatorName = (payload) => ({
  type: 'MUTATION_TYPE',
  payload,
});

// -------- Async action creator --------

export const asyncActionCreatorName = () => async () => {
  // Do some actions ...
};

// -------- Async network action creator --------

export const asyncNetworkActionCreatorName = () => ({
  method: 'GET', // Default
  params: {}, // For GET
  token: true, // Default
  type: 'MUTATION_TYPE_$NETWORK',
  data: {},
  url: '',

  after: (data) => {
    return data;
  },
});
