<p class="todo-item {{ done ? 'todo-item--done' : '' }}"
   data-id="{{ id }}">
    <span class="todo-item__done">
        <input
            class="todo-item__done__input"
            type="checkbox"
            checked="{{ done }}"
            on-change="toggle()"
        />
    </span>
    <span class="todo-item__label">{{ label }}</span>
    <button class="todo-item__remove"
        on-click="remove()">Remove</button>
</p>