/*global yeomanBb, Backbone*/

yeomanBb.Models = yeomanBb.Models || {};

(function () {
    'use strict';

    yeomanBb.Models.TodoModel = Backbone.Model.extend({

        defaults: {
            title: '',
            completed: false
        },

        toggle: function () {
            this.save({
                completed: !this.get('completed')
            });
        }

    });

})();
