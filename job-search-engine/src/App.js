import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CompanyDetailPage from "./components/CompanyDetailPage";
import FavoriteJobs from "./components/FavoriteJobs";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:companyName" element={<CompanyDetailPage />} />
            <Route path="/favorites" element={<FavoriteJobs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
