<from class="todo-filters">
    {{#filters:i}}
    <input
        class="todo-filters__filter todo-filters__filter--{{ . }}"
        name="todo-filters__filter"
        id="todo-filters__filter--all"
        type="radio"
        value="{{ . }}"
        checked="{{ i === 0 }}"
        on-change="choose(.)"
    />
    <label
        for="todo-filters__filter--all"
    >{{ labels[.] }}</label>
    {{/filters}}
</form>