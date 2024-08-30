<template>
  <v-container>
    <h2>Post Detail</h2>
    <v-card v-if="isLoading">
      <v-card-text>
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <p>Loading...</p>
      </v-card-text>
    </v-card>
    <v-card v-else-if="post">
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-text>
        <p>Completed: {{ post.completed }}</p>
        <v-btn @click="goBack">Back</v-btn>
      </v-card-text>
    </v-card>
    <v-alert v-else type="error">
      Post not found.
    </v-alert>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PostDetail',
  data() {
    return {
      isLoading: true, // 로딩 상태 추가
    };
  },
  computed: {
    ...mapGetters({
      post: 'posts/postDetail', // Vuex 스토어의 postDetail을 가져옵니다.
    }),
  },
  async created() {
    const postId = this.$route.params.id;
    try {
      await this.loadPostDetail(postId); // 스토어에서 데이터를 로드합니다.
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      this.isLoading = false; // 데이터 로드가 완료된 후 로딩 상태를 false로 설정
    }
  },
  methods: {
    ...mapActions('posts', ['loadPostDetail']), // loadPostDetail 액션을 가져옵니다.
    goBack() {
      this.$router.push('/post');
    },
  },
};
</script>