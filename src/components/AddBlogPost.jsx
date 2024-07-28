// src/components/AddBlogPost.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddBlogPost = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/blog', { title, author, content });
            setMessage('Blog post added successfully!');
            setTitle('');
            setAuthor('');
            setContent('');
        } catch (error) {
            console.error('There was an error adding the blog post!', error);
            setMessage('Failed to add blog post.');
        }
    };

    return (
        <div className="max-w-[600px] mx-auto p-5">
            <h2 className="text-4xl mb-3 font-bold primary-color">Add New Blog Post</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="block text-lg font-bold mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-lg font-bold mb-1">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-lg font-bold mb-1">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Blog Post</button>
            </form>
        </div>
    );
};

export default AddBlogPost;
