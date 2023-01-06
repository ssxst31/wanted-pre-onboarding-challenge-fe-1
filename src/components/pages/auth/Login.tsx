import React from "react";

function Login() {
  return (
    <div>
      <input
        placeholder="이메일"
        className="px-2 py-3 border border-gray-300"
      />
      <input
        placeholder="비밀번호"
        className="px-2 py-3 border border-gray-300"
      />
    </div>
  );
}

export default Login;
