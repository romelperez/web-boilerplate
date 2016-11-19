const getInitialState = function () {
  return {
    _id: null,
    name: '',
    email: '',
    img: ''
  };
};

const reducers = function (state, action) {

  if (!state) {
    return getInitialState();
  }

  switch (action.type) {

    case 'USER_NAME_UPDATE':
      const { payload } = action;
      state.name = payload.name;
      break;

    default:
      break;
  }

  return state;
};

export default reducers;
