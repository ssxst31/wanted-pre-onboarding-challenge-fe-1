import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TodoModal from "components/TodoModal";
import { Todo } from "type";
interface TodoProps {
  todos: Todo[] | null | undefined;
  deleteTodo: (id: string) => void;
  createTodo: ({ title, content }: { title: string; content: string }) => void;
  updateTodo: ({
    id,
    title,
    content,
  }: {
    id: string;
    title: string;
    content: string;
  }) => void;
}

function Todo({ todos, deleteTodo, createTodo, updateTodo }: TodoProps) {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [ModalType, setModalType] = useState<string>("");
  const [inputs, setInputs] = useState<{
    id: string;
    title: string;
    content: string;
  }>({ id: "", title: "", content: "" });

  if (!todos) {
    return <></>;
  }

  return (
    <>
      <div>
        <div
          onClick={() => {
            setShowCreateModal(true);
            setModalType("create");
          }}
        >
          추가하기
        </div>
        <ul>
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="flex py-6 cursor-pointer w-96"
                onClick={() => {
                  navigate(`/?todo=${todo.id}`);
                }}
              >
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
                    <div className="flex flex-col">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => {
                          setShowCreateModal(true);
                          setModalType("modify");
                          setInputs({
                            id: todo.id,
                            title: todo.title,
                            content: todo.content,
                          });
                        }}
                      >
                        수정
                      </button>
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
      </div>
      <TodoModal
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
        inputs={inputs}
        setInputs={setInputs}
        createTodo={createTodo}
        updateTodo={updateTodo}
        type={ModalType}
      />
    </>
  );
}

export default Todo;
