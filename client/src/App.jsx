import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SharksPage } from "./pages/SharksPage";
import { SharkFormPage } from "./pages/SharkFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to={"/sharks"} />} />
          <Route path="/sharks" element={<SharksPage />} />
          <Route path="/shark-new" element={<SharkFormPage />} />
          <Route path="/sharks/:id" element={<SharkFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
