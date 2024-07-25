// src/components/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentForm from './CommentForm';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/api/blog/${id}`);
      setPost(res.data);
      setComments(res.data.comments);
    };
    fetchPost();
  }, [id]);

  const addComment = async (comment) => {
    const res = await axios.post(`/api/blog/${id}/comments`, comment);
    setComments(res.data.comments);
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.author}</p>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment._id}>
          <p>{comment.text}</p>
          <p>{comment.author}</p>
          <p>{new Date(comment.date).toLocaleDateString()}</p>
        </div>
      ))}
      <CommentForm addComment={addComment} />
    </div>
  );
};

export default BlogPost;
