import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./components/adminPanel";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route component={Error} />
      </Routes>
    </div>
  );
}

export default App;
