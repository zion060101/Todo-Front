import apiClient from "./api";

export default {
  login(username, password) {
    return apiClient.post('/auth/login', {
      username: username,
      password: password
    })
  },
  register(username, password) {
    return apiClient.post('/auth/register', {
      username: username,
      password: password,
      authority: 'USER'
    })
  }
}