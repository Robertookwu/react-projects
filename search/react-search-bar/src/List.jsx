import { useState, useEffect } from 'react';

function List({keyword, results}){

    const [filtered, setFiltered] = useState([]);
    
    useEffect(() =>{
        setFiltered(results.filter((user) =>{
            return keyword === '' ? user : user.name.toLowerCase().includes(keyword.toLowerCase());
         }));
    },[keyword]);
    return(
        <>
             <ul >
            {filtered.map(result => <li key={result.id}>{result.name}</li>)}
            </ul>
        </>
    )
}

export default List;