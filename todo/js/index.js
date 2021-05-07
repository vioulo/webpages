let vm = new Vue({
  el: '#todo',
  data: {
    newTodo: '',
    todos: [
      { id: 0, text: "Learn Vue.js",  done: true },
      { id: 1, text: "Don't be lazy", done: true },
      { id: 2, text: "Make some fun", done: false }
    ],
    nextId: 3
  },
  methods: {
    addItem: function () {
      let txt = this.newTodo.trim();
      if (txt) {
				this.todos.push({ 
          id: this.nextId++,
          text: txt,
					done: false
				});
				this.newTodo = '';
			}
    },
    removeItem: function(idx) {
      this.todos.splice(idx, 1);
    }
  }
});