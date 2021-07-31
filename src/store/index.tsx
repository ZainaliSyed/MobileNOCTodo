import {createStore, applyMiddleware, Store} from 'redux';
import reducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const store: Store<TodoState, TodoAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export default store;
