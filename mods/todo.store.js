module.exports = (function TodoStoreModule() {

    var Reflux = require('reflux');
    var extend = require('extend');


    function todoStore(actions) {
        var _loadList = function _loadList() {
            return [{
                id: 1,
                label: 'The first item on the list',
                done: true
            }, {
                id: 2,
                label: 'The second item on the list',
                done: false
            }];
        };

        return Reflux.createStore({
            init: function() {
                this.list = _loadList();
                
                this.listenTo(actions.remove, this.removeItem);
                this.listenTo(actions.add, this.addItem);
                this.listenTo(actions.toggle, this.toggleItem);
            },
            getDefaultData: function() {
                return this.list;
            },
            addItem: function(label) {
                if(label) {
                    this.list.push({
                        id: Date.now().toString(36),
                        label: label
                    });
                    
                    this.trigger(this.list);
                }
            },
            removeItem: function(itemId) {
                var itemIndex = this._getItemIndex(itemId);
                
                if(itemIndex !== -1) {
                    this.list.splice(itemIndex, 1);
                    
                    this.trigger(this.list);
                }
            },
            toggleItem: function(itemId) {
                var item = this._getItem(itemId);
                
                if(item) {
                    item.done = !item.done;
                    
                    this.trigger(this.list);
                }
            },
            _getItem: function(itemId) {
                return this.list.filter(function(item) {
                    return (item.id === itemId);
                })[0];
            },
            _getItemIndex: function(itemId) {
                return this.list.indexOf(this._getItem(itemId));
            }
        });
    }


    return todoStore;

})();