module.exports = (function() {
    'use strict';

    var fs = require('fs');
    var Ractive = require('ractive');

    var todoListComponent = require('./todo-list.component');
    var todoFiltersComponent = require('./todo-filters.component');
    var todoListActionsComponent = require('./todo-list-actions.component');
    var todoAddItemComponent = require('./todo-add-item.component');
    var template = fs.readFileSync(__dirname + '/todo.view.tpl');

    function _deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    function todoView(container, stores, actions) {
        var view = new Ractive({
          twoway: false,
          modifyArrays: false,
          el: container,
          template: template.toString(),
          data: {
              list: [ ],
              filters: {
                  list: [ ],
                  current: function() { return true; }
              }
          },
          components: {
              'todo-list': todoListComponent({
                  edit: actions.edit,
                  toggle: actions.toggle,
                  remove: actions.remove
              }),
              'todo-list-actions': todoListActionsComponent({
                  toggleAll: actions.toggleAll,
                  clearDone: actions.clearDone
              }),
              'todo-filters': todoFiltersComponent({
                  filter: actions.filter
              }),
              'todo-add-item': todoAddItemComponent({
                  add: actions.add
              })
          },
          oninit: function oninitHandler() {
            this.set('list', stores.data.getDefaultData());
            var removeListChangeHandler = stores.data.listen(function listChangeHandler(list) {
                this.set('list', list);
            }.bind(this));

            this.set('filters', stores.filter.getDefaultData());
            var removeFilterChangeHandler = stores.filter.listen(function filterChangeHandler(filters) {
                this.set('filters', filters);
            }.bind(this));

            this.on('teardown', function onteardownHandler() {
                removeListChangeHandler();
                removeFilterChangeHandler();
            });
          }
        });

        return view;
    }


    return todoView;

})();