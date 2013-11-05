/*global yeomanBb, Backbone*/

yeomanBb.Collections = yeomanBb.Collections || {};

(function () {
    'use strict';

    yeomanBb.Collections.TodosCollection = Backbone.Collection.extend({

        model: yeomanBb.Models.TodosModel

    });

})();
