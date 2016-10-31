import axios from 'axios';

const API_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';

export function getTodos() {
  console.log('getTodos');
  // return {
  //   type: 'GET_TODOS',
  //   promise: request.get(API_URL)
  // }
  return function(dispatch) {
    axios.get(API_URL)
      .then((response) => {
        dispatch({type: "GET_TODOS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTE", payload: err})
      })
  }
}

export function createTodo(text) {
  return {
    type: 'CREATE_TODO',
    promise: request.post(API_URL, { time: Date.now(), text })
  };
}

export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    id,
    text,
    date: Date.now()
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}