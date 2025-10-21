import { Route, Routes } from "react-router-dom";
import Test1 from "./pages/element-drawer";
import Test2 from "./pages/fit-heading";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Test1 />} />
      <Route path="/element-drawer" element={<Test1 />} />
      <Route path="/fit-heading" element={<Test2 />} />
      <Route path="*" element={<Test1 />} />
    </Routes>
  );
}
