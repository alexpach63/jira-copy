import {combineReducers} from 'redux';

// import tweets from './tweetsReducer';
// import user from './userReducer';
// import todos from './todo'; 
// import visibilityFilter from './visibilityFilter';
import issue from './issue'; 
import issues from './issues'; 

export default combineReducers({
	// tweets,
	// user,
  issue,
	issues,
	// todos,
	// visibilityFilter
});
