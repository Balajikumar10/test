import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Api() {
    const [post, setPost] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(res => {
                console.log(res);
                setPost(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(post);
    return (
        <div>
            <ul>
                {
                    post.map(post => <li key={post.id}>{post.body}<br></br>{post.name}</li>)
                }
            </ul>
        </div>
    )
}

export default Api