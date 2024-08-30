import postService from '../../services/postService';

const state = {
  posts: [],
  postDetail: null, // 추가된 부분
};

const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_POST_DETAIL(state, post) { // 추가된 부분
    state.postDetail = post;
  },
  ADD_POST(state, post) {
    state.posts.push(post);
  },
  UPDATE_POST(state, updatedPost) {
    const index = state.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      state.posts.splice(index, 1, updatedPost);
    }
  },
  DELETE_POST(state, postId) {
    state.posts = state.posts.filter(post => post.id !== postId);
  },
};

const actions = {
  async loadPosts({ commit }) {
    try {
      const response = await postService.getPosts();
      commit('SET_POSTS', response.data);
    } catch (error) {
      console.error('Failed to load posts:', error);
    }
  },
  async loadPostDetail({ commit }, postId) { // 추가된 부분
    try {
      const response = await postService.getPostById(postId);
      commit('SET_POST_DETAIL', response.data);
    } catch (error) {
      console.error('Failed to load post detail:', error);
    }
  },
  async addPost({ commit }, postTitle) {
    try {
      const newPost = { title: postTitle, completed: false };
      const response = await postService.createPost(newPost);
      commit('ADD_POST', response.data);
    } catch (error) {
      console.error('Failed to add post:', error);
    }
  },
  async updatePost({ commit }, post) {
    try {
      const response = await postService.updatePost(post.id, post);
      commit('UPDATE_POST', response.data);
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  },
  async deletePost({ commit }, postId) {
    try {
      await postService.deletePost(postId);
      commit('DELETE_POST', postId);
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  },
};

const getters = {
  posts(state) {
    return state.posts;
  },
  postDetail(state) { // 추가된 부분
    return state.postDetail;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};