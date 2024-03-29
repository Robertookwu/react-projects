import { useState} from 'react';
import List from './List.jsx';

function Todo(){

    const [item, setItem] = useState();
    
    function handleClick(e){
        e.preventDefault();
        const todoItem = document.getElementById("todo-item");
        setItem(todoItem.value);
    }
    return (
        <>
            <form id="todo-form" >
                <input id="todo-item" type="text" />
                <button id="todo-add" type="submit" onClick={handleClick} >Add todo</button>
            </form>
            <List item={item}/>
        </>
    )
}

export default Todo;