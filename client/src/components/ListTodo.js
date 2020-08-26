import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    // Delete todo
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    const getTodos = async e => {
        try {
            const response = await fetch("http://localhost:5001/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
            
        } catch (error) {
            console.log(error.message);
            
        }

    }
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            <table class="table mt-5">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {/*
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                */}
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td><EditTodo todo={todo} /></td>
                        <td>
                            <button 
                                className="btn btn-danger"
                                onClick={() => deleteTodo(todo.todo_id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                
                
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodo;