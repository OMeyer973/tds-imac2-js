import { h } from 'hyperapp'

export default (props) => h('div', null, [
  h('input', {
    type: 'text',
    placeholder: 'Add an item...',
    value: props.text,
    oninput: (event) => props.onInputChange(event)
  }),
  h('input', { type: 'button', onclick: props.onAddTodo, value: 'Add a todo', disabled: props.text.length <= 0 })
])
