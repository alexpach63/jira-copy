import axios from 'axios';

const API_URL = '/todosAll';

export function getTodos() {
  // return {
  //   type: 'GET_TODOS',
  //   promise: request.get(API_URL)
  // }
  return function(dispatch) {
    axios.get(API_URL)
      .then((response) => {
      	console.log(response);
        dispatch({type: "GET_TODOS", payload: response.data})
      })
  }
}

let nextTodoId = 0;
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	};
};

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	};
};