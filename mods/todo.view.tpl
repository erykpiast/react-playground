<section class="todo">
    <header>
        <h1>Todo App</h1>
    </header>

    <todo-add-item />
    <todo-filters filters="{{ filters.list || null }}" />
    <todo-list list="{{ list || null }}" filter="{{ filters.current || null }}" />
    <todo-list-actions />

</section>