import { addTodo } from '../actions/todoActions';

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return{
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO': 
			if(state.id !== action.id){
				return state
			}
			return {
				...state,
				completed: !state.completed
			}
		default:
			return state;
	}
};
const initialState = [
	{id: 0, text: 'one', completed: false},
	{id: 1, text: 'two', completed: false},
	{id: 2, text: 'three', completed: false},
]
const todos = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TODOS':{
			console.log(action.payload);
			return state.concat(action.payload);
		}
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO': 
			return state.map(t => 
				todo(t, action)
			);
		default:
			return state;
	}
};

export default todos;