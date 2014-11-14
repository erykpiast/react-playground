module.exports = (function() {

    var fs = require('fs');
    var Ractive = require('ractive');

    var template = fs.readFileSync(__dirname + '/todo-add-item.component.tpl');


    function todoAddItemComponent(actions) {
        var component = Ractive.extend({
          isolate: true,
          template: template.toString(),
          data: {
              label: ''
          },
          add: function(e) {
              e.original.preventDefault();

              actions.add(this.data.label);

              this.set('label', '');
          }
        });

        return component;
    }


    return todoAddItemComponent;

})();