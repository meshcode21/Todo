import express from 'express';
import { addTodo, deleteTodo, getTodos, toggleTodo } from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.delete('/', deleteTodo);
router.patch('/toggle', toggleTodo);


export default router;