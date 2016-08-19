import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

let init = dataFORM.form;
const initialState = init.map(state => {
  state.completed = false;
  return state
})


// [
//   {
//     text: 'Use Redux',
//     completed: false,
//     id: 0
//   }
// ]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          _id: state.reduce((maxId, todo) => Math.max(todo._id, maxId), -1) + 1,
          completed: false,
          title: action.title
        }, 
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo._id !== action._id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo._id === action._id ?
          Object.assign({}, todo, { title: action.title }) :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo._id === action._id ?
          Object.assign({}, todo, { completed: !todo.completed }) :
          todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
