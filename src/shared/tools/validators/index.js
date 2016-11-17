const login = {
  disableHTML5Validation: true,
  fields: [{
    name: 'email',
    required: true,
    validators: {
      isEmail: true,
      isLength: { min: 4, max: 64 },
    }
  }, {
    name: 'pwd',
    required: true,
    validators: {
      isLength: { min: 8, max: 64 },
    }
  }]
};

const register = {
  disableHTML5Validation: true,
  fields: [{
    name: 'name',
    required: true,
    validators: {
      isAlphanumericText: true,
      isLength: { min: 4, max: 64 },
    }
  }, {
    name: 'email',
    required: true,
    validators: {
      isEmail: true,
      isLength: { min: 4, max: 64 },
    }
  }, {
    name: 'pwd',
    required: true,
    validators: {
      isLength: { min: 8, max: 64 },
    }
  }, {
    name: 'repwd',
    onlyUI: true,
    required: true,
    validators: {
      isEqualToField: 'pwd',
    }
  }]
};

export default {
  login,
  register
};
