import i18n from 'shared/i18n';

export default {
  '/register': {
    get (req, res) {
      const title = i18n.t('register.title');
      res.render('register.html', {
        seo: { title }
      });
    }
  }
};
