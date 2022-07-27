import { useState } from "react"


const Home = () => {

    const [name, setName] = useState('Tswelopele');
    const [like, setLike] = useState(0);

    const handleclick = () => {
        setName('Junior');
        setLike(like + 1);
    }

    // const handleClickAgain = (name) =>{
    //     console.log("mara "+ name +"!!?")
    // }

    return ( 
        <div className="home-div">
            <h2>buckle up and be ready to be amazed</h2>

            <h4>{name}</h4>
            <p>liked {like} times</p>
            {/* passing no arguments to the function */}
            <button onClick={handleclick}>click me</button>

            {/* passing a function that takes an argument */}

            {/* <button onClick={() => handleClickAgain('tswelopele')}>click me Again</button> */}
        </div>
    );
}
 
export default Home;


"react-router-dom": "^5.3.3",
"react": "^18.2.0",
"react-dom": "^18.2.0",