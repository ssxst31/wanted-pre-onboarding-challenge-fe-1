import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface CreateTodoModalProps {
  showCreateModal: boolean;
  setShowCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  inputs: {
    id: string;
    title: string;
    content: string;
  };
  setInputs: React.Dispatch<
    React.SetStateAction<{
      id: string;
      title: string;
      content: string;
    }>
  >;
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
  type: string;
}

function CreateTodoModal({
  showCreateModal,
  setShowCreateModal,
  inputs,
  setInputs,
  createTodo,
  updateTodo,
  type,
}: CreateTodoModalProps) {
  const isCreateType = type === "create";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const closeModal = () => {
    setShowCreateModal(false);
  };

  return (
    <Transition appear show={showCreateModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 space-y-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  ??? ??? {isCreateType ? "????????????" : "????????????"}
                </Dialog.Title>
                <div className="flex flex-col space-y-5">
                  <input
                    placeholder="??????"
                    className="px-2 py-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    onChange={onChange}
                    name="title"
                    value={inputs.title}
                  />
                  <input
                    placeholder="??????"
                    className="px-2 py-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                    onChange={onChange}
                    name="content"
                    value={inputs.content}
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => {
                      const { id, title, content } = inputs;
                      isCreateType
                        ? createTodo({ title, content })
                        : updateTodo({ id, title, content });
                      setInputs({ id: "", title: "", content: "" });
                    }}
                  >
                    {isCreateType ? "????????????" : "????????????"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CreateTodoModal;
