import "./assets/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Description from "./pages/Description";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/description" element={<Description />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
