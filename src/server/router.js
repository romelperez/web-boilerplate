import express      from 'express';
import log          from 'server/log';
import settings     from 'server/settings';
import gatherRoutes from 'server/tools/gatherRoutes';

const router = function (server) {

  log.router.info('Initializing...');

  (settings.api.srcs || []).forEach(conf => gatherRoutes(server, conf));

  // Public files
  server.use(express.static(settings.api.publicPath));

  // Docs folder
  if (settings.dev) {
    server.use('/docs', express.static(settings.api.docsPath));
  }

  // HTTP 404
  server.use((req, res) => res.status(404).render('intern/404.html'));

  // HTTP 5XX
  server.use((err, req, res) => {
    log.router.error(err.stack);
    res.status(err.status || 500).render('intern/500.html', { content: err.stack });
  });

  log.router.info('Done.');
};

export default router;
