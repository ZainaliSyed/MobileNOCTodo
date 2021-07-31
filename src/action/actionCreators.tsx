import * as actionTypes from './actionTypes';

export function addTodo(todo: ITodo) {
  const action: TodoAction = {
    type: actionTypes.ADD_TODO,
    todo,
  };

  return simulateHttpRequest(action);
}

export function removeTodoItem(todo: ITodo) {
  const action: TodoAction = {
    type: actionTypes.REMOVE_TODO,
    todo,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: TodoAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
