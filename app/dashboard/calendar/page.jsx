'use client'
import { data } from 'autoprefixer';
import axios from 'axios'
import React from 'react'

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            console.log(data)
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <h1 className='text-red-800'>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}