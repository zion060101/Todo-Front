import { createStore } from 'vuex';
import todos from './modules/todos';
import posts from './modules/posts';


const store = createStore({
  modules: {
    todos,
    posts
  }
});

export default store;