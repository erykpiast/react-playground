module.exports = (function() {
    'use strict';

    var Reflux = require('reflux');
    

    function todoActions() {
        return Reflux.createActions([
            'toggle',
            'toggleAll',
            'add',
            'remove',
            'clearCompleted',
            'edit'
        ]);
    }

    return todoActions;

})();