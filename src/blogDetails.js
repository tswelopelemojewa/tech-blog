import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './usefetch';
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/'+id);
    
    const handleClick = ()=>{
        fetch('http://localhost:8000/blogs/' +id, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/');
        })
        
    }


    return (
        <div className='blog-detail'>
            { isPending && <div>Loading...</div>}
            { blog && (                
                <article>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick} className="del-btn">Delete</button>
                </article>)
            }
            { error && <div>{error}</div>}
        </div>
    );
}
 
export default BlogDetails;