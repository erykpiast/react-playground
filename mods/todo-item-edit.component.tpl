<form class="todo-item-edit">
    <input
        class="todo-item-edit__input"
        type="text"
        value="{{ label }}">
    <button
        class="todo-item-edit__submit"
        type="submit"
        on-click="save()"
    >Save</button>
    <button
        class="todo-item-edit__cancel"
        type="submit"
        on-click="cancel()"
    >Cancel</button>
</form>