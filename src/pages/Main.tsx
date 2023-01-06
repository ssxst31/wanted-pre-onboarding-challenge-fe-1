import React from "react";

import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const goAuth = () => {
    navigate(`/auth`);
  };

  return (
    <div
      className="absolute transform w-96 top-1/2 left-1/2"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <div>TodoList</div>
      <button onClick={goAuth}>로그인 / 회원가입 하러가기</button>
    </div>
  );
}

export default Main;
