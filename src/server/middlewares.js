import nunjucks   from 'nunjucks';
import morgan     from 'morgan';
import bodyParser from 'body-parser';
import session    from 'cookie-session';
import settings   from 'server/settings';
import log        from 'server/log';

const middlewares = function (server) {

  log.middlewares.info('Initializing...');

  nunjucks.configure(settings.api.viewsPath, {
    autoescape: true,
    express: server,
    watch: settings.dev
  });

  server.use(morgan('short'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(session({
    name: settings.session.name,
    secret: settings.session.pass,
  }));

  log.middlewares.info('Done.');
};

export default middlewares;
