import axios from '@/api/axios'

export const getTodos = async () => {
    const res = await axios.get('/todos');
    return res.data;
}

export const postTodo = async (todoText: string) => {
    const res = await axios.post('/todos', { title: todoText });
    return res;
}

export const deleteTodo = async (todoID: Number) => {
    const res = await axios.delete(`/todos/?id=${todoID}`)
    return res;
}

export const updateTodo = async (todoID: Number, todoText: string) => {
    const res = await axios.patch(`/todos/?id=${todoID}`, { title: todoText })
    return res;
}
