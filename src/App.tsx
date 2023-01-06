import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Main from "pages/Main";
import Auth from "pages/Auth";
import { ProtectedRoute } from "routers/ProtectedRoute";
import Navbar from "components/Navbar";

function App() {
  const [isLogin, setIsLogin] = useState<string | null>(
    window.localStorage.getItem("token")
  );
  console.log(isLogin);
  return (
    <BrowserRouter>
      {isLogin && <Navbar setIsLogin={setIsLogin} />}
      <Routes>
        <Route path="/" element={<Main isLogin={isLogin} />} />
        <Route path="/todo" element={<Main isLogin={isLogin} />} />
        <Route
          path="/auth"
          element={
            <ProtectedRoute>
              <Auth setIsLogin={setIsLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
