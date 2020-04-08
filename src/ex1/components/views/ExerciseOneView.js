import { h } from 'hyperapp'

export default (/* state, actions */) =>
  h('main', null, [
    h('header', { class: 'ex1__header' }, ['Trying hyperapp']),
    h('section', null, [
      h('p', null, ['Hi !']),
      h('p', null, [
        'Hyperapp is a JS micro framework intended to be',
        p('em', null, ['as barebones as possible.'])
      ])
    ])
  ])
