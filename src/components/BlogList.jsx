// src/components/BlogList.jsx
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getAllPosts } from '../api';

const BlogList = () => {
  const { data, error, isLoading } = useQuery('posts', getAllPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
