import React, { Fragment, useState, useEffect } from "react";

const ListTodo = () => {
    const [todos, setTodos] = useState([]);

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
                    <tr>
                        <td>{todo.description}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                ))}
                
                
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodo;