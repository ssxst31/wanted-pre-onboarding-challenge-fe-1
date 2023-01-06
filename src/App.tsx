import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "pages/Main";
import Auth from "pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
