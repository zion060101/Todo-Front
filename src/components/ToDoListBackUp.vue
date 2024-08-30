<template>
    <div>
      <h2>To-Do List</h2>
      <input v-model="newTodo" placeholder="Add a new to-do" @keyup.enter="addTodo" />
      <button @click="addTodo">Add</button>
      
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.completed" @change="savedTodos" />
          <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
          <button @click="removeTodo(index)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToDoList',
    data() {
      return {
        newTodo: '',
        todos: []
      };
    },
    mounted() {
        const savedTodos = localStorage.getItem("todos");
        if(savedTodos) {
            this.todos = JSON.parse(savedTodos);
        }
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.todos.push({ text: this.newTodo, completed: false });
          this.newTodo = '';
        }
        this.saveTodos();
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
        this.saveTodos();
      },
      saveTodos() {
        localStorage.setItem("todos",JSON.stringify(this.todos))
      }
    }
  };
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
    color: grey;
  }
  </style>
