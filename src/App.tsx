import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomeLoader from "@/routes/home/Loader";
import SearchLoader from "@/routes/search/Loader";
import TemplateLoader from "@/routes/template//Loader";

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
        <Route path="/search" element={<SearchLoader />} />
        <Route path="/home" element={<HomeLoader />} />
        <Route path="/abc" element={<TemplateLoader></TemplateLoader>} />
        <Route path="*" element={<Navigate to={"/search"} />} />
      </Routes>
    </>
  );
}

export default App;
