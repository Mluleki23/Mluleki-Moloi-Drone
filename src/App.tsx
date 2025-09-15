import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Pages/layout";
import Content1 from "./components/Pages/content1";
import Content2 from "./components/Pages/content2";
import Content3 from "./components/Pages/content3";
import Error from "./components/Pages/404";
import Tamplate from "./components/Pages/tamplate";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content1 />} />
        <Route path="content" element={<Content2 />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="Content3" element={<Content3 />} />
          <Route path=":firstname" element={<Tamplate />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
