import apiClient from "./api";

export default {
    getTodos(){
        return apiClient.get('posts')
    },
    getTodoById(id){
        return apiClient.get(`/posts/${id}`)
    },
    craeteTodo(post){
        return apiClient.post(`/posts`, post)
    },
    updateTodo(id, post){
        return apiClient.put(`/posts/${id}`, post)
    },
    deleteTodo(id) {
        return apiClient.delete(`/posts/${id}`)
    }
}