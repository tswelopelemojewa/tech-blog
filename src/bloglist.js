import React from 'react';
import { Link } from 'react-router-dom';

const Bloglist = ({blogs, title}) => {
//blogs and title are passed to the component as props
//this another way of passing props to a component
// const blogs = props.blogs;
// const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`blog/${blog.id}`} >
                    <h2>{ blog.title}</h2>
                </Link>
                
                <p>{blog.author}</p>

            </div>
        ))}
        </div>
    );
}
 
export default Bloglist;