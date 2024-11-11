import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const initialState = {
  error: '',
  post: {},
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Fetch_Success':
      return {
        error: '',
        loading: false,
        post: action.payload,
      };
      break;
    case 'Fetch_Error':
      return {
        loading: false,
        error: `${action.payload}`,
        post: {},
      };

    default:
      return state;
      break;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        dispatch({ type: 'Fetch_Success', payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: 'Fetch_Error',
          payload: `Something Went Wrong ${err}`,
        });
      });
  }, []);
  return (
    <div>
      <ul>
        <li>{state.loading ? 'Loading' : state.post.title}</li>
        <li>{state.error ? state.error : null}</li>
      </ul>
    </div>
  );
};

export default DataFetchingTwo;
