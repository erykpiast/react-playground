module.exports = (function() {

    var fs = require('fs');
    var Ractive = require('ractive');

    var todoListComponent = require('./todo-list.component');
    var todoAddItemComponent = require('./todo-add-item.component');
    var template = fs.readFileSync(__dirname + '/todo.view.tpl');

    function _deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    function todoView(container, store, actions) {
        var view = new Ractive({
          twoway: false,
          modifyArrays: false,
          el: container,
          template: template.toString(),
          data: { },
          components: {
              'todo-list': todoListComponent({
                  toggle: actions.toggle,
                  remove: actions.remove
              }),
              'todo-add-item': todoAddItemComponent({
                  add: actions.add
              })
          },
          oninit: function oninitHandler() {
            this.set('list', store.getDefaultData());

            var removeListChangeHandler = store.listen(function listChangeHandler(list) {
                this.set('list', list);
            }.bind(this));

            this.on('teardown', function onteardownHandler() {
                removeListChangeHandler();
            });
          }
        });

        return view;
    }


    return todoView;

})();