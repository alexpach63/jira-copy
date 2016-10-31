import axios from 'axios';

const API_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';

export const getIssues = () => {
  return {
    type: 'GET_ISSUES',
    payload: new Promise(resolve => {
      axios.get('/api/issues') 
      .then((response) => {
        resolve(response.data);
      })
    })
  }
}