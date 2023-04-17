import TodoTemplate from './TodoTemplate.js';
import View from '../core/View.js';

export default class TodoView extends View {
  constructor() {
    super(document.querySelector('main'));
  }

  addEvent(handlers) {
    this.$newEl.addEventListener('click', this.#runDomEvents(handlers), true);
  }

  #runDomEvents({ handleAddTodo, handleReverseTodo }) {
    return ({ target }) => {
      if (target.classList.contains('add_button')) {
        const $lastElement = this.$newEl.querySelector('li:last-child');
        const nextId = Number($lastElement.dataset.id) + 1;
        const todo = {
          id: nextId,
          text: `todo`,
        };
        handleAddTodo(todo);
      }
      if (target.classList.contains('reverse_button')) {
        handleReverseTodo();
      }
    };
  }

  displayTodo(todoList) {
    const ul = this.$newEl.querySelector('ul');
    ul.innerHTML = `${todoList
      .map(
        todo => `
          <li data-id="${todo.id}">
            ${todo.text} ${todo.id}
          </li>
        `
      )
      .join('')}`;
  }

  getTemplate() {
    return TodoTemplate;
  }
}
