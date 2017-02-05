import render from './render';
import store from './store';

store.subscribe(render);

render();
