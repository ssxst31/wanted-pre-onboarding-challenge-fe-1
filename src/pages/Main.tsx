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
      <div className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
        TodoList
      </div>
      <button
        className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={goAuth}
      >
        로그인 / 회원가입 하러가기
      </button>
    </div>
  );
}

export default Main;
