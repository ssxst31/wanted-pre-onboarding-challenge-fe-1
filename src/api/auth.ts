import { post } from "api/index";

export async function login({ email, password }: any) {
  const resp = await post("/users/login", { email, password });

  return resp.data;
}

export async function signup({ email, password }: any) {
  const resp = await post("/users/create", {
    email,
    password,
  });

  return resp.data;
}
