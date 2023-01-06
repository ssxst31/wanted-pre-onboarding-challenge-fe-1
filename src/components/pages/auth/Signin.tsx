import React, { useState } from "react";

import { signup } from "api/auth";
import getErrorMessage from "utils/error";

interface inputState {
  email: string;
  password: string;
  checkPassword: string;
}

function Signin() {
  const [inputs, setInputs] = useState<inputState>({
    email: "",
    password: "",
    checkPassword: "",
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
      const res = await signup({ email, password });

      alert(res.message);
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
      <input
        placeholder="비밀번호 확인"
        className="px-2 py-3 border border-gray-300"
        onChange={onChange}
        name="checkPassword"
        value={inputs.checkPassword}
      />
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  );
}

export default Signin;
