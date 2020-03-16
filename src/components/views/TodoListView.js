import { h } from 'hyperapp'

import TodoList from '../TodoList'
import TodoItemInput from '../TodoItemInput'

export default (state, actions) => h('div', null, [
  TodoList({
    items: state.items,
    onToggleTodo: actions.toggleTodo
  }),
  TodoItemInput({
    text: state.todoInput,
    onInputChange: actions.updateTodoInput,
    onAddTodo: actions.addTodo
  })
])
