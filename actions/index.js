import * as types from '../constants/ActionTypes'

export function addTodo(title) {
  return { type: types.ADD_TODO, title }
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, _id }
}

export function editTodo(id, title) {
  return { type: types.EDIT_TODO, _id, title }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, _id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}
