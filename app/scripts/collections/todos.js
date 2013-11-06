/*global yeomanBb, Backbone*/

yeomanBb.Collections = yeomanBb.Collections || {};

(function () {
    'use strict';

    yeomanBb.Collections.TodosCollection = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage('backbone-generator-todos'),

        initialize: function () {
            this.model = yeomanBb.Models.TodoModel;
        }

    });

})();
