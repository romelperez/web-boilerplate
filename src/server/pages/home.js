import i18n from 'shared/i18n';

export default {
  '/': {
    get (req, res) {
      const title = i18n.t('home.title');
      res.render('home.html', {
        seo: { title }
      });
    }
  }
};
