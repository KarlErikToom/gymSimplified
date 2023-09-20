import { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="App">
      <Router>
        <Nav setIsSidebarOpen={setIsSidebarOpen} />
        <div className="side-main">

        <Sidebar isOpen={isSidebarOpen} />
        <Routes>
          <Route exact path="/" element={<Landing />}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
