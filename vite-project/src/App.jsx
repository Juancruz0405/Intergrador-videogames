import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Create from "./components/Create/Create";
import "./App.modules.css";
import { useLocation } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="div">
      <div className="app">
        {pathname !== "/" ? <SearchBar /> : null}
        {/* //si pathname q es la url esdistinta a la barrita mostrar searchabr */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Detail />} />
          <Route path="/home/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
