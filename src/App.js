import { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ExercisePage from "./pages/ExercisePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AccountDetails from "./pages/AccountDetails";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Nav setIsSidebarOpen={setIsSidebarOpen} user={user} />
        <div className="side-main">
          <Sidebar isOpen={isSidebarOpen} />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/:muscleGroup/:id" element={<ExercisePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details" element={<AccountDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
