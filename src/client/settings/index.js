import S          from 'string';
import base       from './base';
import production from './production';
import test       from './test';

/**
 * @module {Object} settings
 * @description
 * Global static project settings.
 */
const settings = base;

if (settings.env === 'test') {
  Object.assign(settings, test);
}
else if (settings.env === 'production') {
  Object.assign(settings, production);
}

// Parse API.
settings.api = S(settings.api).chompRight('/').s;

export default settings;
