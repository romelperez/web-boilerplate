import fs   from 'fs';
import path from 'path';
import log  from 'server/log';

const getShortPath = function (src = '') {
  return src.replace(process.cwd(), '');
};

const isFolder = function (src = '') {
  return fs.statSync(src).isDirectory();
};

const isFile = function (src = '') {
  return !isFolder(src);
};

const getItems = function (src = '') {
  try {
    return fs.readdirSync(src).map(item => {
      return path.join(src, item);
    });
  }
  catch (e) {
    log.router.warn(`Folder "${getShortPath(src)}" was not found.`);
    return [];
  }
};

const gatherRoutes = function (server, { mount, folder }) {

  const defineRouters = (filePath, definition) => {

    Object.keys(definition).forEach(function (url) {

      const direction = (mount || '') + url;
      const route = server.route(direction);
      const verbs = definition[url];

      if (typeof verbs !== 'object') {
        log.router.error(`File "${getShortPath(filePath)}" does not have proper HTTP verb in "${url}" URL.`);
        return;
      }

      Object.keys(verbs).forEach(function (verb) {
        log.router.debug(`HTTP ${verb.toUpperCase()} ${direction} defined.`);
        route[verb].call(route, verbs[verb]);
      });
    });
  };

  const processFile = (filePath) => {

    log.router.debug(`Processing "${getShortPath(filePath)}"...`);

    let definition;
    try {
      definition = require(filePath);
    }
    catch (err) {
      log.router.error(err.stack);
    }

    if (typeof definition !== 'object') {
      log.router.error(`File "${getShortPath(filePath)}" does not have proper URL definition.`);
    }
    else {
      defineRouters(filePath, definition ? definition.default : definition);
    }
  };

  // Get direct children items from folder.
  const items = getItems(folder);

  // Process direct files.
  items.filter(isFile).forEach(processFile);

  // Process direct folders.
  items.filter(isFolder).forEach(folderItem => {
    const subItems = getItems(folderItem);
    subItems.filter(isFile).forEach(processFile);
  });
};

export default gatherRoutes;
