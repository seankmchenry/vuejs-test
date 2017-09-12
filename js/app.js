/**
 * app.js
 */

/* App #1 */
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello world!'
  }
});

/* App #2 */
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

/* App #3 */
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

/* App #4 */
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

/* App #5 */
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});