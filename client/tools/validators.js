window.vulcanval.extendLocale({
  id: 'es',
  msgs: {
    isTime: 'Una hora válida es requerida.',
  }
});

window.vulcanval.addValidator('isTime', function (value = '') {
  return (/^\d\d\:\d\d$/).test(String(value));
});
