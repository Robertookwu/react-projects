import {useState} from 'react';
import Result from "./Result.jsx";

function Search(){

    const [keyword, setKeyword] = useState("");

    function updateKeyWord({target}){
        setKeyword(target.value);
    }
    
    return(
        <>
            <div className="search-bar-wrapper">
                <input type='search' id='search-bar' onChange={updateKeyWord} />
            </div>
            <div className="search-bar-result-wrapper">
                <Result keyword={keyword} />
            </div>
        </>
    )
}

export default Search;