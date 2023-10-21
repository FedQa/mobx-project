import React from 'react';
import todo from "./store/todo";
import {observer} from "mobx-react-lite";

const Todo = observer(() => {
    console.log('render');
    return (
        <div>
            {/*<button onClick={() => todo.addToDo()}>Add new ToDo</button>*/}
            <button onClick={() => todo.fetchTodos()}>fetchTodos</button>
            {todo.todos.map(t =>
                <div className="toDo" key={t.id}>
                    <input type="checkbox" checked={t.completed} onChange={() => todo.completeToDo(t.id)}/>
                    {t.title}
                    <button onClick={()=> todo.removeToDo(t.id)}>X</button>
                </div>
            )}
        </div>
    )
});

export default Todo;