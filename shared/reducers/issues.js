const issues = (state = [], action) => {
	// console.log(action);
	switch (action.type) {
		// case 'GET_NEWS_PENDING': {
		// 	return state;
		// }
		case 'GET_ISSUES_FULFILLED': {
			return action.payload;
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