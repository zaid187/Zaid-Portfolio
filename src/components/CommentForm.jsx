// src/components/CommentForm.jsx
import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addComment({ text, author, date: new Date() });
    setText('');
    setAuthor('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Comment:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
