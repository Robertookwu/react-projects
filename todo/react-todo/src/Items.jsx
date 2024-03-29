import { useState, useEffect } from 'react';

function Items({todoList}){
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        setTodos(todoList);
        console.log(todos);
    }, [todoList,todos]);

    function deleteTodo(e){
        const index = parseInt(e.target.id);
        setTodos(todos.splice(index, 1));
    }
    return (
        <>
            <ul>
                {todos.map((todo, index) => <li key ={index} className='todo-items' > {todo}
                <button id = {index} onClick = {deleteTodo}>Delete</button> </li> )}
            </ul>
        </>
    )
}

export default Items;