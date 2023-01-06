import React, { useState } from "react";

import { login } from "api/auth";
import getErrorMessage from "utils/error";

interface inputState {
  email: string;
  password: string;
}

function Login() {
  const [inputs, setInputs] = useState<inputState>({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const { email, password } = inputs;
    try {
      const res = await login({ email, password });

      alert(res.message);

      window.localStorage.setItem("token", res.token);
    } catch (error) {
      const errorMessage = getErrorMessage(error);

      alert(errorMessage.response.data.details);
    }
  };

  return (
    <div>
      <input
        placeholder="이메일"
        className="px-2 py-3 border border-gray-300"
        onChange={onChange}
        name="email"
        value={inputs.email}
      />
      <input
        placeholder="비밀번호"
        className="px-2 py-3 border border-gray-300"
        onChange={onChange}
        name="password"
        value={inputs.password}
      />

      <button onClick={handleSubmit}>로그인</button>
    </div>
  );
}

export default Login;
