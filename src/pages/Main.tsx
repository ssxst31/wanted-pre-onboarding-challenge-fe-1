import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Main() {
  const [isLogin, setIsLogin] = useState(window.localStorage.getItem("token"));
  const navigate = useNavigate();

  const goAuth = () => {
    navigate(`/auth`);
  };

  const signout = () => {
    window.localStorage.removeItem("token");
    setIsLogin("");
  };

  return isLogin ? (
    <div onClick={signout}>로그아웃</div>
  ) : (
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
