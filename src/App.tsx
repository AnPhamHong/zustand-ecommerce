// import { Link, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout";

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>|<Link to="/about">About</Link>
      </nav>x
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <MainLayout />
    </div>
  );
}

export default App;
