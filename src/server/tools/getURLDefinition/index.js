import S from 'string';

const getDefinition = function (definition = '') {

  const info = definition.trim().replace(/\s/g, ' ').split(' ');
  const method = info[0].toLowerCase();
  const path = S(info[1] || '').ensureLeft('/');

  return { method, path };
};

export default getDefinition;
