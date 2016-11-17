import i18n from 'shared/i18n';

export default {
  '/login': {
    get (req, res) {

      const title = i18n.t('login.title');
      const content = `
        <h1>Login</h1>
        <p>Login page content.</p>
      `;

      res.render('login.html', {
        seo: { title },
        content
      });
    }
  }
};
