module.exports = (function() {
    'use strict';

    var fs = require('fs');
    var Ractive = require('ractive');

    var template = fs.readFileSync(__dirname + '/todo-list-actions.component.tpl');


    function todoListActionsComponent(actions) {
        var component = Ractive.extend({
          template: template.toString(),
          twoway: true,
          modifyArrays: false,
          isolate: true,
          toggleAll: function() {
              actions.toggleAll(this.event.node.checked);
          },
          clearDone: function() {
              this.event.original.preventDefault();
              
              actions.clearDone();
          }
        });

        return component;
    }


    return todoListActionsComponent;

})();