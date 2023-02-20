import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducer/reducer';
import thunkMiddlware from "redux-thunk"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(applyMiddleware(thunkMiddlware));

const store = createStore(rootReducer,enhancer);

export default store;