<template>
    <v-container>
      <h2>To-Do Detail</h2>
      <v-card>
        <v-card-text>
          <p>ID: {{ id }}</p>
          <p v-if="todo">Text: {{ todo.text }}</p>
          <p v-else>Todo not found</p>
        </v-card-text>
      </v-card>
      <v-btn @click="$router.push('/')">Back</v-btn>
    </v-container>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    created() {
        console.log('created')
        console.log('created', this.id)
    },
    mounted() {
        console.log('mounted')
    },
    computed: {
      ...mapGetters(['todos']),
      todo() {
        return this.todos[this.id]
      }
    }
  }
  </script>