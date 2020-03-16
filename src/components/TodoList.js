import { h } from 'hyperapp'
import TodoItem from './TodoItem'

export default (props) =>
  // eslint-disable-next-line fp/no-mutating-methods
  h('ul', null, props.items
    .sort((a, b) => new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime())
    .map(item =>
      h('li', null, [
        TodoItem({
          task: item.task,
          done: item.done,
          onToggleTodo: () => props.onToggleTodo(item.id)
        })
      ])
    ))
  // <ul>
  //   <li>
  //     {
  //       props.items.map(item =>
  //         <TodoItem task={item.task} done={item.done} />
  //       )
  //     }
  //   </li>
  // </ul>
