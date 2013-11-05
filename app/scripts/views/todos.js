/*global yeomanBb, Backbone, JST*/

yeomanBb.Views = yeomanBb.Views || {};

(function () {
    'use strict';

    yeomanBb.Views.TodosView = Backbone.View.extend({

        template: JST['app/scripts/templates/todos.ejs']

    });

})();
