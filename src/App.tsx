import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomeLoader from "@/routes/home/Loader";
import SearchLoader from "@/routes/search/Loader";
import TemplateLoader from "@/routes/template//Loader";

import { Button } from "antd";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    function goto(_event: any, message: string) {
      console.log(_event, message);
      navigate(message);
    }

    window.ipcRenderer.on("go-to", goto);

    return () => {
      window.ipcRenderer.off("go-to", goto);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Navigate to={"/search"} />} />
        <Route path="/home" element={<HomeLoader />} />
        <Route path="/search" element={<SearchLoader />} />
        <Route path="/abc" element={<TemplateLoader></TemplateLoader>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
