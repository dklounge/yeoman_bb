/*global yeomanBb, Backbone, JST*/

yeomanBb.Views = yeomanBb.Views || {};

(function () {
    'use strict';

    yeomanBb.Views.TodoView = Backbone.View.extend({

        tagName: 'li',

        template: JST['app/scripts/templates/todo.ejs'],

        events: {
            'click input[type="checkbox"]': 'toggle',
            'dblclick span': 'toggleEdit',
            'submit form': 'toggleEdit'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        toggle: function () {
            this.model.toggle();
        },

        toggleEdit: function () {
            var input = this.$('form input');
            var title = input.val().trim();

            if (!title) {
                // Edit mode
                this.model.destroy();
                this.remove();
                return;
            } else {
                // Done editing
                this.model.set('title', title);
                this.model.save();

                this.render();
            }
        }

    });

})();
