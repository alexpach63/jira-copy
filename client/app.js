import React from 'react';
import {render} from 'react-dom';
import Redux from 'redux';
import {Router, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import routes from '../shared/routes';

// // 
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

// import immutifyState     from '../shared/lib/immutifyState';
import reducer from '../shared/reducers';
import {connect} from 'react-redux';
import { createStore, combineReducers, applyMiddleware }  from 'redux';

// const initialState = immutifyState(window.__INITIAL_STATE__);
const initialState = window.__INITIAL_STATE__;

const middleware = applyMiddleware(promise(), thunk, logger());
// const store   = createStore(reducer, initialState, middleware);

// import TodoApp from '../shared/components/App';

// const store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
const store = createStore(reducer, initialState, middleware);
console.log(initialState);
render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  root
);

// render(
// 	<Provider store={store}>
// 		<TodoApp />
// 	</Provider>,
// 	root
// );