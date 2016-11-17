const getInitialState = function () {
  return {
    name: ''
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
