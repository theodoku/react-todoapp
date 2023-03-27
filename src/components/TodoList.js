import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleChangeProps, deleteTodoProps }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </ul>
  );
};

export default TodoList;