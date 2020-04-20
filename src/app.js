import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      items: [
        {name: "Feed Son", itemPriority: false},
        {name: "Go To Shop", itemPriority: true}
      ],
      newItem: ""
    }
  })
});
