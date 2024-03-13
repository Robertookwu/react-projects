import { useState, useEffect } from 'react';
import List from './List.jsx';

function Result(props){

    const [results, setResults] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => setResults(json));
    }, []);
    return(
        <>
            <div></div>
            <List keyword={props.keyword} results={results} />
        </>
    )
}

export default Result;