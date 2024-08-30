import apiClient from "./api";

export default {
    getTodos(page, size){
        return apiClient.get(`/todos?page=${page}&size=${size}`)
    },
    getTodoById(id){
        return apiClient.get(`/todos/${id}`)
    },
    craeteTodo(todo){
        return apiClient.post(`/todos`, todo)
    },
    updateTodo(id, todo){
        return apiClient.put(`/todos/${id}`, todo)
    },
    deleteTodo(id) {
        return apiClient.delete(`/todos/${id}`)
    }
}