<ul class="todo-list">
    {{#list:i}}
    <li class="todo-list__item">
        <todo-item id="{{ id }}" label="{{ label.toString() }}" done="{{ !!done }}" />
    </li>
    {{/list}}
</ul>