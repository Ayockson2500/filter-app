import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = ({searchItems}) => {
    const [posts, setPosts] = useState([]);
    const [filterItems, setFilterItems] = useState('display-none');
    // console.log(searchItems);
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            // console.log(response.data);
            setPosts(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const handleFilterSearchChange = () => {
        setFilterItems(posts.filter((post) => post.title !== searchItems ? filterItems : '' ))
        console.log(posts);
    }
  return (
    <div onChange={handleFilterSearchChange}>
        <ul>
            {
                posts.map((post) => <li key={post.id}>{post.title}</li>)
            }
        </ul>
    </div>
  )
}

export default FetchData