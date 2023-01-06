import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

function DetailTodo({ todos }: any) {
  const { search } = useLocation();
  const values = queryString.parse(search);
  const [todo, setTodo] = useState<any>();

  useEffect(() => {
    if (todos) {
      setTodo(todos.find((d: any) => d.id === values.todo));
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
