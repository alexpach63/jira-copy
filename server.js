import express from 'express';
import path from 'path';
const app = express();
const router = express.Router();
const debug = require('debug');

debug();

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider }              from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import routes from './shared/routes';
import fetchComponentData        from './shared/lib/fetchComponentData';
import reducer from './shared/reducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { connect } from 'react-redux';

const mapStateToNewsProps = (state) => {
  return {
    issues: state.issues
  };
};
const mapDispatchToNewsProps = (dispatch) => {
  return {
    onNewsClick: () => {
      dispatch(getIssues())
    }
  };
};

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducer, middleware);

app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', (req, res) => {
// 	const HTML = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="utf-8">
//           <title>Redux Demo</title>
//           <link rel="stylesheet" href="/css/style.css">
//         </head>
//         <body>
//           <div id="root"></div>
//           <script type="application/javascript" src="/js/app.js"></script>
//         </body>
//       </html>
//     `;

//     res.send(HTML);
// })

app.get('/todosAll', (req, res) => {
	var lol = [
		{id: 100, text: 'one1', completed: false},
		{id: 102, text: 'one2', completed: false}
	];
	res.send(lol);
})

const issues = [
    {id: 1, machine_name: 'C4R-301', name: 'Реалтайм статусов', text: 'issue1', type: 1},
    {id: 2, machine_name: 'C4R-302', name: 'Лендинг призов за ранги', text: 'issue2', type: 2},
    {id: 3, machine_name: 'C4R-303', name: 'Процесс регистрации', text: 'issue3', type: 3},
    {id: 4, machine_name: 'C4R-304', name: 'Рефакторинг статуса', text: 'issue4', type: 4},
    {id: 5, machine_name: 'C4R-305', name: 'Фикс аналитики купонов', text: 'issue5', type: 5},
    {id: 6, machine_name: 'C4R-306', name: 'Интерфейс модерации', text: 'issue6', type: 1},
    {id: 7, machine_name: 'C4R-307', name: 'Бот выдачи заказа', text: 'issue7', type: 2},
    {id: 8, machine_name: 'C4R-308', name: 'Финальные фиксы', text: 'issue8', type: 3},
    {id: 9, machine_name: 'C4R-309', name: 'Верстка Cases4real', text: 'issue9', type: 4},
    {id: 10, machine_name: 'C4R-310', name: 'Починить кеширование', text: 'issue10', type: 4},
    {id: 11, machine_name: 'C4R-311', name: 'Аналитика', text: 'issue11', type: 2},
    {id: 12, machine_name: 'C4R-312', name: 'Доделать приложение', text: 'issue12', type: 1},
  ];

app.get('/api/issues', (req, res) => {
  res.send(issues);
})

app.get('/api/issue/:issueId', (req, res) => {
  var issue = {};
  for (var i = 0; i < issues.length; i++) {
    if(issues[i].id == req.params.issueId){
      issue = issues[i];
    }
  }
  res.send(issue);
})

app.get('*', (req, res) => {

  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // hey we made it!

      function renderView() {
        const InitialView = (
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        );

        const componentHTML = renderToString(InitialView);
        const initialState = store.getState();        

        const HTML = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Redux Demo</title>
              <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
              <link rel="stylesheet" href="/css/style.css">
              <script>
                 window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
              </script>
            </head>
            <body>
              <div id="root">${componentHTML}</div>
              <script type="application/javascript" src="/js/app.js"></script>
            </body>
          </html>
        `;

        // res.send(HTML);
        return HTML;

      }

      fetchComponentData(store.dispatch, props.components, props.params)
        .then(renderView)
        .then(html => res.send(html))
        .catch(err => res.send(err.message));

    } else {
      res.status(404).send('Not Found')
    }
  })
})

export default app;