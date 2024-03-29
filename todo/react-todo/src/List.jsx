import { useState, useEffect } from 'react';
import Items from './Items.jsx';

function List({item}){
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        item != undefined &&
        setTodoList([...todoList, item]);
    }, [item]);
    
    return (
        <>
            <div className="todo-list-wrapper">
                <Items todoList={todoList} />
            </div>
        </>
    )
}

export default List;