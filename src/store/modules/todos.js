const state = {
    todos: []
  };
  
  const mutations = {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, index) {
      if (index >= 0 && index < state.todos.length) {
        state.todos.splice(index, 1);
      }
    },
    updateTodoStatus(state, { index, completed }) {
      if (index >= 0 && index < state.todos.length) {
        state.todos[index].completed = completed;
      }
    }
  };
  
  const actions = {
    loadTodos({ commit }) {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        commit('setTodos', JSON.parse(savedTodos));
      }
    },
    saveTodos({ state }) {
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    addTodo({ commit, dispatch }, todoText) {
      const newTodo = { text: todoText, completed: false };
      commit('addTodo', newTodo);
      dispatch('saveTodos');
    },
    removeTodo({ commit, dispatch }, index) {
      commit('removeTodo', index);
      dispatch('saveTodos');
    },
    toggleTodoStatus({ commit, dispatch }, payload) {
      const { index, completed } = payload;
      console.log('toggleTodoStatus', index, completed);
      commit('updateTodoStatus', { index, completed });
      dispatch('saveTodos');
    }
  };
  
  const getters = {
    todos(state) {
      return state.todos;
    }
  };
  
  export default {
    state,
    mutations,
    actions,
    getters
  };