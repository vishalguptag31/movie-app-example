import {createStore , applyMiddleware} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import thunk  from  'redux-thunk';

import rootReducers from './reducers'

const intialStae = {};
const middleware = [thunk];

export const store = createStore(
    rootReducers,
    intialStae, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;