import update from 'react/lib/update';
const issues = (state = [], action) => {
	// console.log(action);
	switch (action.type) {
		// case 'GET_NEWS_PENDING': {
		// 	return state;
		// }
		case 'GET_ISSUES_FULFILLED': {
			return action.payload;
		}
		case 'CHANGE_TYPE': {
			const payload = action.payload;
			// const state = update(state: {
			// 	$push: {...payload, type: 5}
			// })
			update(state, {
				$splice: [ {...issue, type: this.props.id}]
			})
			console.log(state);
			return {
				state
			}
			// return {...state, {action.payload, type: 5}};
		}
		// case 'GET_ISSUES_FULFILLED': {
		// 	return state.concat(action.payload);
		// }
		// case 'GET_NEWS_REJECTED': {
		// 	return state;
		// }
		default:{
			return state;
		}
	}
}

export default issues;