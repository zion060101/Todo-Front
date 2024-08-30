<template>
  <v-row class="mb-3">
    <v-col>
      <v-text-field
        v-model="newTodo"
        label="Add a new to-do"
        outlined
        dense
        @keyup.enter="submitTodo"
      />
    </v-col>
    <v-col cols="auto">
      <v-btn color="primary" @click="submitTodo">Add</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      newTodo: ''
    };
  },
  methods: {
    submitTodo() {
      if (this.newTodo.trim()) {
        this.$emit('add-todo', this.newTodo);
        this.newTodo = '';
      }
    }
  }
};
</script>
