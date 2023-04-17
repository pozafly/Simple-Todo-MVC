import { bindingMethods } from '../utils/eventUtils.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.#render();
    // this.view.addEvent({
    //   handleAddTodo: this.handleAddTodo.bind(this),
    //   handleReverseTodo: this.handleReverseTodo.bind(this),
    // });
    bindingMethods(this, 'handle');
  }

  handleAddTodo(todo) {
    this.model.addTodo(todo);
    this.#render();
  }

  handleReverseTodo() {
    const { reverseTodoList } = this.model;
    this.view.displayTodo(reverseTodoList);
  }

  #render() {
    const { todoList } = this.model;
    this.view.displayTodo(todoList);
  }
}
