import { post, get, deleteCall } from "api/index";

export async function fetchTodos() {
  const resp = await get("/todos");

  return resp.data;
}

export async function postTodo({ title, content }: any) {
  const resp = await post("/todos", { title, content });

  return resp.data;
}

export async function deleteTodo({ id }: any) {
  const resp = await deleteCall(`/todos/${id}`);

  return resp.data;
}
