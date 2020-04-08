import { h } from 'hyperapp'

export default (props) =>
  h('p', null, [props.key, ' : ', props.value])
