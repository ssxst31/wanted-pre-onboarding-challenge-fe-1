import React, { useState } from "react";

import useTodo from "hooks/useTodo";
import CreateTodoModal from "components/CreateTodoModal";

function Todo({ setIsLogin }: any) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const { todos, deleteTodo, createTodo } = useTodo();

  const signout = () => {
    window.localStorage.removeItem("token");
    setIsLogin(false);
  };

  if (!todos) {
    return <></>;
  }

  return (
    <>
      <ul>
        {todos.map((todo: any) => {
          return (
            <li key={todo.id} className="flex py-6 w-96">
              <div className="flex flex-col flex-1 ml-4">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <div>제목 : {todo.title}</div>
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    내용 : {todo.content}
                  </p>
                </div>
                <div className="flex items-end justify-between flex-1 text-sm">
                  <p className="text-sm text-gray-500">
                    작성날짜 : {todo.createdAt}
                  </p>
                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => {
                        deleteTodo(todo.id);
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div onClick={signout}>로그아웃</div>
      <div
        onClick={() => {
          setShowCreateModal(true);
        }}
      >
        추가하기
      </div>
      <CreateTodoModal
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
        createTodo={createTodo}
      />
    </>
  );
}

export default Todo;
