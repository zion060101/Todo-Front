<template>
    <v-text-field
      v-model="newPost"
      label="Add a new post"
      @keyup.enter="submitPost"
      outlined
      dense
    />
    <v-btn color="primary" @click="submitPost">Add</v-btn>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'AddPost',
    emits: ['add-post'],  // 커스텀 이벤트를 정의합니다.
    setup(props, { emit }) {
      const newPost = ref('');
  
      const submitPost = () => {
        if (newPost.value.trim()) {
          emit('add-post', newPost.value);
          newPost.value = '';
        }
      };
  
      return {
        newPost,
        submitPost,
      };
    },
  };
  </script>
  