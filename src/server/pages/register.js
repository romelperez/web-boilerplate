import i18n from 'shared/i18n';

export default {
  '/register': {
    get (req, res) {

      const title = i18n.t('register.title');
      const content = `
        <h1>Register</h1>
        <p>Register page content.</p>
      `;

      res.render('register.html', {
        seo: { title },
        content
      });
    }
  }
};
