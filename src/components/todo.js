import React from "react";

function Todo({ todo }) {

    const h1 = <h1>{todo.title}</h1>
    const text = todo.isCompleted ? <strike>{h1}</strike> : h1
    return <div data-testid={todo.id}>{text}</div>
}

export default Todo