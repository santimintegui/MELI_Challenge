// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import ItemInfo from "./pages/ItemInfo";
import "./styles/styles.scss";
import ItemList from "./pages/List";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/items"
            element={
              <>
                <Layout>
                  <ItemList />
                </Layout>
              </>
            }
          />
          <Route
            path="/items/:id"
            element={
              <>
                <Layout>
                  <ItemInfo image={""} />
                </Layout>
              </>
            }
          />
          <Route path="*" element={<div>Error 404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
