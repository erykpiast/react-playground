<p class="todo-item {{ done ? 'todo-item--done' : '' }} {{ editing ? 'todo-item--editing' : '' }}">
    <span class="todo-item__done">
        <input
            class="todo-item__done__input"
            type="checkbox"
            checked="{{ done }}"
            disabled="{{ editing }}"
            on-change="toggle()"
        />
    </span>
    {{#if editing }}
    <todo-item-edit label="{{ label || '' }}" on-save="finishEditing" on-cancel="finishEditing" />
    {{else}}
    <span class="todo-item__label">{{ label }}</span>
    <nav class="todo-item__nav">
        <button class="todo-item__nav__button todo-item__nav__button--remove"
            on-click="remove()">Remove</button>
        <button class="todo-item__nav__button todo-item__nav__button--edit"
            on-click="startEditing()">Edit</button>
    </nav>
    {{/if}}
</p>