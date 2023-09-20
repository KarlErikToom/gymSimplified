import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="stuff">

        <Nav />
        <Routes>
          <Route path="/"  element={<Landing />}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
