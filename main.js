import TodoController from './Todo/TodoController.js';
import TodoView from './Todo/TodoView.js';
import TodoModel from './Todo/TodoModel.js';

new TodoController(new TodoView(), new TodoModel());
