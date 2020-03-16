export default {
  toggleTodo: (id) => (state) => {
    const myItem = state.items.find(item => item.id === id)

    if (myItem === undefined) {
      console.log(`Task at id ${id} was not found in the state`)
      return state
    }

    return {
      ...state,
      items: state.items
        .filter(item => item.id !== id)
        .concat({ ...myItem, done: !myItem.done })
    }
  },
  addTodo: () => (state) => {
    return {
      ...state,
      items: state.items.concat({
        id: Math.random().toString(16).substring(2, 8),
        task: state.todoInput,
        done: false,
        createdAt: new Date().toISOString()
      }),
      todoInput: ''
    }
  },
  updateTodoInput: (event) => (state) => {
    const input = event.target.value

    return {
      ...state,
      todoInput: input
    }
  }
}
