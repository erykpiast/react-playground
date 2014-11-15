module.exports = (function TodoStoreModule() {
    'use strict';
    
    var Reflux = require('reflux');
    var extend = require('extend');
    
    var todoListFilters = require('./todo-list-filters.js');


    function todoFilterStore(actions) {
        return Reflux.createStore({
            init: function() {
                this.list = todoListFilters;
                this.names = Object.keys(this.list);

                this.listenTo(actions.filter, this.setFilter);
            },
            getDefaultData: function() {
                return {
                    list: this.names,
                    current: this.list[this.names[0]]
                };
            },
            setFilter: function(filterName) {
                if(this.list.hasOwnProperty(filterName)) {
                    this.trigger({
                        list: this.names,
                        current: this.list[filterName]
                    });
                }
            }
        });
    }


    return todoFilterStore;

})();