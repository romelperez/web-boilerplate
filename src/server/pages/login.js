import i18n from 'shared/i18n';

export default {
  '/login': {
    get (req, res) {
      const title = i18n.t('login.title');
      res.render('login.html', {
        seo: { title }
      });
    }
  }
};
