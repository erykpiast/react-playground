<div class="todo-add-item">
    <form
        class="todo-add-item__form"
        on-submit="add()"
    >
        <input
            class="todo-add-item__form__in"
            type="text"
            value="{{ label }}"
            placeholder="Add item"
            autofocus
        />
        <button
            class="todo-add-item__form__submit"
        >Add</button>
    </form>
</div>