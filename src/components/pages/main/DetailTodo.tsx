import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { Todo } from "type";

interface DetailTodoProps {
  todos: Todo[] | null | undefined;
}

function DetailTodo({ todos }: DetailTodoProps) {
  const { search } = useLocation();
  const values = queryString.parse(search);
  const [todo, setTodo] = useState<Todo>();

  useEffect(() => {
    if (todos) {
      setTodo(todos.find((todo) => todo.id === values.todo));
    }
  }, [values.todo, todos]);

  if (!todo) {
    return <></>;
  }

  return (
    <div>
      <div>제목 : {todo.title}</div>
      <div>내용 : {todo.content}</div>
    </div>
  );
}

export default DetailTodo;
