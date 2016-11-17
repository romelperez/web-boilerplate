import settings from 'client/settings';

const loadCSS = function (path) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = path;
  document.body.appendChild(link);
};

const loader = function () {
  settings.resources.
    filter(resource => resource.type === 'CSS').
    forEach(resource => loadCSS(resource.path));
};

export default loader;
