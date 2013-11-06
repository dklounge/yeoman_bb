/*global yeomanBb, Backbone, JST*/

yeomanBb.Views = yeomanBb.Views || {};

(function () {
    'use strict';

    yeomanBb.Views.TodosView = Backbone.View.extend({

        el: '#todo-app',

        template: JST['app/scripts/templates/todos.ejs'],

        events: {
            'submit': 'createTodo'
        },

        initialize: function () {
            this.render();

            this.listenTo(this.collection, 'add', this.addTodoItem);
            this.listenTo(this.collection, 'reset',this.addAllTodoItems);

            this.collection.fetch();
        },

        render: function () {
            this.$el.html(this.template());

            return this;
        },

        createTodo: function () {},

        addTodoItem: function () {},

        addAllTodoItems: function () {}

    });

})();
