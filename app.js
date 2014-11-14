module.exports = (function() {

    var todoStore = require('./mods/todo.store');
    var todoActions = require('./mods/todo.actions');
    var todoView = require('./mods/todo.view');
    

    function App(container) {
        var actions = todoActions();
        var store = todoStore(actions);
        var view = todoView(container, store, actions);
        
        console.log('app created!');
    }


    return App;

})();