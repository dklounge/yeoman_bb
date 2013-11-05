/*global yeomanBb, Backbone, JST*/

yeomanBb.Views = yeomanBb.Views || {};

(function () {
    'use strict';

    yeomanBb.Views.TodoView = Backbone.View.extend({

        template: JST['app/scripts/templates/todo.ejs']

    });

})();
