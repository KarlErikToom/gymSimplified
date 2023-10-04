import { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ExercisePage from "./pages/ExercisePage";
import Signup from "./pages/Signup";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <Nav setIsSidebarOpen={setIsSidebarOpen} />
        <div className="side-main">
          <Sidebar isOpen={isSidebarOpen} />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/:muscleGroup/:id" element={<ExercisePage />} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
