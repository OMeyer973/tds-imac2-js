import { h } from 'hyperapp'
import IdCardEntry from './IdCardEntry'

export default (props) =>
  h('div', null, [
    h('img', { src: props.picture }),
    ...Object.entries(props.listEntries)
      .map(([k, v]) => IdCardEntry({ key: k, value: v }))
  ])
