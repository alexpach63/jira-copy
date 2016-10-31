// import Immutable from 'immutable';

// const defaultState = new Immutable.List();
const defaultState = [
  {id: 20, text: "20gfdgdf", completed: false},
  {id: 21, text: "21gfdgdf", completed: true},
  {id: 22, text: "22gfdgdf", completed: false},
];

export default function todoReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_TODOS':
      return state.concat(action.payload);
    case 'CREATE_TODO':
      return state.concat(action.res.data.text);
    case 'EDIT_TODO':
      return state.set(action.id, action.text);
    case 'DELETE_TODO':
      return state.delete(action.id);
    default:
      return state;
  }
}