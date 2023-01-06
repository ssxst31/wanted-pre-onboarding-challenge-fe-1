import React from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  setIsLogin: React.Dispatch<React.SetStateAction<string | null>>;
}

function Navbar({ setIsLogin }: NavbarProps) {
  const navigate = useNavigate();

  const signout = () => {
    window.localStorage.removeItem("token");
    setIsLogin(null);
    navigate(`/`);
  };

  return (
    <div className="flex justify-end h-12 py-4 bg-indigo-500">
      <div onClick={signout}>로그아웃</div>
    </div>
  );
}

export default Navbar;
