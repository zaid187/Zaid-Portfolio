// src/components/BlogPost.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Fetch the blog post from the backend
        axios.get(`/api/blog/${id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the blog post!', error);
            });
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="max-w-[1200px] mx-auto p-5">
            <h2 className="text-4xl mb-3 font-bold">{post.title}</h2>
            <p className="text-sm text-gray-600">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
            <div className="mt-5">
                {post.content}
            </div>
        </div>
    );
};

export default BlogPost;
