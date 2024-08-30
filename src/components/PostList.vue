<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Vue.js Post Board</h1>
        <AddPost @add-post="addPost" />
        <v-list>
          <v-list-item
            v-for="(post, index) in posts"
            :key="index"
            @click="$router.push({ name: 'PostDetail', params: { id: post.id } })"
          >
            <template v-slot:prepend>
              <v-checkbox
                v-model="post.completed"
                @click.stop="handleTogglePostStatus(post)"
                hide-details
              />
            </template>
            
            <v-list-item-title>{{ post.title }}</v-list-item-title>
            
            <template v-slot:append>
              <v-btn icon="mdi-delete" size="small" @click.stop="removePost(post.id)">
              </v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddPost from './AddPost.vue';

export default {
  name: 'PostList',
  components: { AddPost },
  computed: {
    ...mapGetters({
      posts: 'posts/posts'
    }),
  },
  created() {
    this.loadPosts();
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts',
      addPost: 'posts/addPost',
      updatePostStatus: 'posts/updatePost', // 메서드 이름 변경
      removePost: 'posts/deletePost',
    }),
    handleTogglePostStatus(post) { // 메서드 이름을 변경합니다
      const updatedPost = { ...post, completed: !post.completed };
      this.updatePostStatus(updatedPost); // 변경된 이름의 액션 호출
    }
  }
};
</script>