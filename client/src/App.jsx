import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Nested route content will be rendered in <Outlet /> */}
          <Route index element={<LandingPage />} />
          {/* Other routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
