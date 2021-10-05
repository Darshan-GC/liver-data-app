const initialState = {
  Data: [],
};

function addreducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'DATA': {
      return { ...state, Data: payload };
    }
    default:
      return state.Data;
  }
}

export default addreducer;
