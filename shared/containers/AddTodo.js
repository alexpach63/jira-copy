import React from 'react';
import { connect } from 'react-redux';
import { addTodo, getTodos } from '../actions/todoActions';

let AddTodo = ({dispatch}) => {
	let input;

	return (
		<div>
			<input ref={node => {
				input = node;
			}} />
			<button onClick={() => {
				dispatch(addTodo(input.value))
				input.value = '';
			}}>
				Add Todo
			</button>
			<button onClick={() => {
				dispatch(getTodos())
			}}>
				Load all
			</button>
		</div>
	);
};
AddTodo = connect()(AddTodo);

export default AddTodo;