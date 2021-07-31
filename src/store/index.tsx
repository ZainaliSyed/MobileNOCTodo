import {createStore, applyMiddleware, Store} from 'redux';
import reducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export default store;
