// src/components/Blog.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch blog posts from the backend
        axios.get('/api/blog')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the blog posts!', error);
            });
    }, []);

    return (
        <div className="max-w-[1200px] mx-auto p-5" id="blog">
            <h2 className="text-4xl mb-3 font-bold primary-color">Blog</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {posts.map(post => (
                    <div key={post._id} className="p-5 shadow-lg rounded-md">
                        <h3 className="text-2xl font-bold">{post.title}</h3>
                        <p className="text-sm text-gray-600">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
                        <p className="mt-2">{post.content.substring(0, 100)}...</p>
                        <a href={`/blog/${post._id}`} className="text-blue-500 hover:underline">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
