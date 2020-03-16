import { h } from 'hyperapp'

export default (props) =>
  h('div', null, [
    h('input', { type: 'checkbox', checked: props.done, onchange: props.onToggleTodo }),
    h('p', null, [props.done ? h('em', null, props.task) : props.task])
  ])
