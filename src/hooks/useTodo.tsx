import React, { useState, useEffect } from "react";

import * as todoApi from "api/todo";

function useTodo() {
  const [todos, setTodos] = useState<any>();

  useEffect(() => {
    loadTodo();
  }, []);

  const loadTodo = () => {
    todoApi.fetchTodos().then((res) => setTodos(res.data));
  };

  const createTodo = ({ title, content }: any) => {
    todoApi.postTodo({ title, content }).then(() => {
      loadTodo();
      alert("성공적으로 추가되었습니다.");
    });
  };

  const deleteTodo = (id: number) => {
    todoApi.deleteTodo({ id }).then(() => {
      loadTodo();
      alert("성공적으로 삭제되었습니다.");
    });
  };

  return { todos, createTodo, deleteTodo };
}

export default useTodo;
