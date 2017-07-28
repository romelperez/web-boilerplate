function isSupported () {
  try {
    window.localStorage.setItem('__tk', 'value');
    window.localStorage.getItem('__tk');
    window.localStorage.removeItem('__tk');
    return 'localStorage' in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
}

const store = {
  local: null
};

function resetLocal () {
  if (!isSupported()) {
    var db = {
      setItem: function (id, val) {
        return (db[id] = String(val));
      },
      getItem: function (id) {
        return db.hasOwnProperty(id) ? String(db[id]) : void 0;
      },
      removeItem: function (id) {
        return delete db[id];
      },
      clear: function () {
        resetLocal();
      }
    };

    store.local = db;
  } else {
    store.local = window.localStorage;
  }
}

resetLocal();

module.exports = store;
