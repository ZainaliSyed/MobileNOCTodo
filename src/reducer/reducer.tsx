import * as actionTypes from '../action/actionTypes';
import _ from 'lodash';

const initialState: TodoState = {
  todoNoclist: [],
};
const reducer = (
  state: TodoState = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodoItem: ITodo = {
        id: Math.round(Math.random() * 999999), // not really unique
        title: action.todo.title,
        description: action.todo.description,
      };
      return {
        ...state,
        todoNoclist: _.concat(newTodoItem, state.todoNoclist),
      };
    case actionTypes.REMOVE_TODO:
      const updatedTodo: ITodo[] = state.todoNoclist.filter(
        todo => todo.id !== action.todo.id,
      );
      return {
        ...state,
        todoNoclist: updatedTodo,
      };
  }
  return state;
};

export default reducer;
