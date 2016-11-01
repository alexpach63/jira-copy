import axios from 'axios';


export const getIssue = (id) => {
  console.log(id)
  return {
    type: 'GET_ISSUE',
    payload: new Promise(resolve => {
      axios.get('/api/issue/'+id) 
      .then((response) => {
        resolve(response.data);
      })
    })
  }
}