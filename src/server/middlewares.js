import nunjucks     from 'nunjucks';
import morgan       from 'morgan';
import compression  from 'compression';
import bodyParser   from 'body-parser';
import session      from 'cookie-session';
import settings     from 'server/settings';
import log          from 'server/log';

const middlewares = function (server) {

  log.middlewares.info('Initializing...');

  nunjucks.configure(settings.api.viewsPath, {
    autoescape: true,
    express: server,
    watch: settings.dev
  });

  server.use(morgan('short'));
  server.use(compression());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(session({
    name: settings.session.name,
    secret: settings.session.pass,
  }));

  server.use('/api/', function (req, res, next) {

    // Enable CORS.
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // Disable CACHE.
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate'); // HTTP 1.1.
    res.header('Pragma', 'no-cache'); // HTTP 1.0.
    res.header('Expires', '0'); // Proxies.

    next();
  });

  log.middlewares.info('Done.');
};

export default middlewares;
