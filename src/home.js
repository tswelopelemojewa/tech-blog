// import { useState, useEffect } from "react"
import React from 'react';
import Bloglist from "./bloglist";
import useFetch from "./usefetch";


const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


    return ( 
        <div className="home-div">
            {error && <div>{error}</div>}

            {isPending && <div>Loading...</div>}

            {/* prop blogs={blogs} is passes data to the bloglist component  */}
            {blogs && <Bloglist  blogs={blogs} title="all blogs" />}
            {/* display tswelopele's blogs more like search results */}
            {/* <Bloglist  blogs={blogs.filter((blog)=> blog.author === 'Tswelopele')} title="Tswelopele's blogs" /> */}
        </div>
    );
}
 
export default Home;