import "./App.css";
import { AboutPage } from "./components/pages/AboutPage";
import { IndexPage } from "./components/pages/IndexPage";
import { Footer } from "./components/UI/Footer";
import { Header } from "./components/UI/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Header } from './components/navigation/Header'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
