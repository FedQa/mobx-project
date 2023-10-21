import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id:1, title: "homework", completed: false},
        {id:2, title: "play games", completed: false},
        {id:3, title: "walk", completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    // addToDo(todo)
    // {
    //     todo.id = this.todos.length > 0 ? this.todos[this.todos.length - 1].id : 0;
    //     this.todos.push(todo);
    // }

    removeToDo(id)
    {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1 )
        {
            this.todos.splice(index, 1);
        }
    }

    completeToDo(id)
    {
        const todo = this.todos.find(t => t.id === id);
        if (todo)
        {
            todo.completed = !todo.completed;
        }
    }

    fetchTodos()
    {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                const lastId = this.todos.length > 0 ? this.todos[this.todos.length - 1].id : 0;
                json.forEach((item, index) => {
                    item.id = lastId + index + 1;
                })
                this.todos.push(...json);
            })
            .catch(error => {
                console.log("Failed to fetch todos!", error);
            });
    }
}

export default new Todo()