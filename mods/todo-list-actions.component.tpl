<div class="todo-list-actions">
    <span class="todo-list-actions__toggle-all">
        <input
            class="todo-list-actions__toggle-all__input"
            id="todo-list-actions__toggle-all"
            type="checkbox"
            on-change="toggleAll()"
        />
        <label
            class="todo-list-actions__toggle-all__label"
            for="todo-list-actions__toggle-all">
            Toggle all
        </label>
    </span>
    <button
        class="todo-list-actions__clear-done"
        on-click="clearDone()"
    >Clear done</button>
</div>