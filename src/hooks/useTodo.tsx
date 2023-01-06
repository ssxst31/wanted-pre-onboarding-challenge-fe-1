import React, { useState, useEffect } from "react";

import * as todoApi from "api/todo";
import { Todo } from "type";

function useTodo(): {
  todos: Todo[] | null | undefined;
  createTodo: ({ title, content }: { title: string; content: string }) => void;
  deleteTodo: (id: number) => void;
  updateTodo: ({
    id,
    title,
    content,
  }: {
    id: string;
    title: string;
    content: string;
  }) => void;
} {
  const [todos, setTodos] = useState<null | Todo[]>();

  useEffect(() => {
    loadTodo();
  }, []);

  const loadTodo = () => {
    todoApi.fetchTodos().then((res) => setTodos(res.data));
  };

  const createTodo = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
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

  const updateTodo = ({
    id,
    title,
    content,
  }: {
    id: string;
    title: string;
    content: string;
  }) => {
    todoApi.updateTodo({ id, title, content }).then(() => {
      loadTodo();
      alert("성공적으로 수정되었습니다.");
    });
  };

  return { todos, createTodo, deleteTodo, updateTodo };
}

export default useTodo;
