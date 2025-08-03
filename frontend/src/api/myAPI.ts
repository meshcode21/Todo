import axios from '@/api/axios'

export const getTodos = async () => {
    const res = await axios.get('/todos');
    return res.data;
}

export const postTodo = async (todoText: string) => {
    const res = await axios.post('/todos', { title: todoText });
    return res;
}
