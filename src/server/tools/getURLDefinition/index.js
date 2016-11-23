import S from 'string';

const getDefinition = function (definition = '') {

  const info = definition.trim().replace(/\s{1,}/g, ' ').split(' ');
  const method = info[0].toLowerCase();
  const path = S(info[1] || '').ensureLeft('/').s;

  return { method, path };
};

export default getDefinition;
