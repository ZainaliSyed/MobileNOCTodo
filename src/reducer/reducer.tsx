import * as actionTypes from '../action/actionTypes';
import _ from 'lodash';

const initialState: TodoState = {
  todoNoclist: [
    {
      id: 1,
      title: 'post 1',
      body: 'Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi',
    },
    {
      id: 2,
      title: 'post 2',
      body: 'Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint',
    },
  ],
};
const reducer = (
  state: TodoState = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodoItem: ITodo = {
        id: Math.random(), // not really unique
        title: action.todo.title,
        body: action.todo.body,
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
