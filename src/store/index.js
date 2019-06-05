import { applyMiddleware, createStore } from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
