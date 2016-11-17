import i18n from 'shared/i18n';

export default {
  '/app': {
    get (req, res) {
      const title = i18n.t('app.title');
      res.render('app.html', {
        seo: { title }
      });
    }
  }
};
