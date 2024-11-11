import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        setLoading(false);
        setError('');
        setPost(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError('SomeThing Went Wrong');
      });
  }, []);
  return (
    <div>
      <ul>
        <li>{loading ? 'loading' : post?.title}</li>
        <li>{error?error:null}</li>
      </ul>
    </div>
  );
};

export default FetchData;
