export default class View {
  constructor(target) {
    this.$newEl = target.cloneNode(true);
    this.$newEl.innerHTML = this.getTemplate();
    target.replaceWith(this.$newEl);
  }

  addEvent() {}
  runDomEvents() {}
  getTemplate() {}
}
