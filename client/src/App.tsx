import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import InfoView from "./pages/Infoview";
import ListView from "./pages/ListView";
import "./styles/styles.scss";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/items" element={<ListView />} />
          <Route path="/items/:id" element={<InfoView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
