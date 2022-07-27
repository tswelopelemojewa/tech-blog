import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { axios } from 'axios';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Tswelopele');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
    
        setIsPending(true);

        fetch('http://localhost:8000/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            console.log('new blog added');
            navigate('/');
        })
      }


    return (
        <div className='create'>
             <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />

                <label>Blog Body</label>
                <textarea required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>

                <label>author</label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="Tswelopele">Tswelopele</option>
                    <option value="Junior">Junior</option>
                </select>

                <button >Add Blog</button>
            </form>
        </div>
       
    );
}
 
export default Create;