import express      from 'express';
import mongoose     from 'mongoose';
import bluebird     from 'bluebird';
import ngrok        from 'ngrok';
import chalk        from 'chalk';
import settings     from 'server/settings';
import log          from 'server/log';
import middlewares  from 'server/middlewares';
import router       from 'server/router';
import pkg          from '../../package';

log.app.info(chalk.bold.green(`
>>>
>>> Starting: ${pkg.name} v${pkg.version}!
>>> Running on "${settings.env}" environment.
>>>`));

const server = express();

server.locals = {
  def: settings
};

mongoose.Promise = bluebird;

middlewares(server);
router(server);

server.listen(settings.port, settings.host, function (err) {
  if (err) {
    throw err;
  }

  log.app.info(`Running at http://${settings.host}:${settings.port}.`);

  if (settings.tunnel) {
    ngrok.connect(settings.port, (innerErr, url) => {
      if (innerErr) {
        log.app.error(innerErr);
        return;
      }

      log.app.info(`Running through ngrok at: ${url}.`);
    });
  }
});

// When the application is about to be finished.
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    log.db.info('Terminating MongoDB connection.');
    log.app.info('Closed.');
    process.exit(0);
  });
});
