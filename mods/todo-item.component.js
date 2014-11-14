module.exports = (function() {

    var fs = require('fs');
    var Ractive = require('ractive');

    var template = fs.readFileSync(__dirname + '/todo-item.component.tpl');


    function todoItemComponent(actions) {
        var component = Ractive.extend({
          twoway: false,
          modifyArrays: false,
          isolate: true,
          template: template.toString(),
          toggle: function() {
              actions.toggle(this.get('id'));
          },
          remove: function() {
              actions.remove(this.get('id'));
          }
        });

        return component;
    }


    return todoItemComponent;

})();