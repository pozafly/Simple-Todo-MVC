export default class Model {
  constructor() {
    this.todoList = [
      {
        id: 0,
        text: 'todo',
      },
    ];
  }

  addTodo(todo) {
    this.todoList = [...this.todoList, todo];
  }

  get reverseTodoList() {
    return [...this.todoList].reverse();
  }
}
