// import { Link, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
import Nav from "./Navigation/Nav";
import Products from "./pages/Product/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>|<Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Nav />
      <div className="container">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="content">
          <Recommended />
          <Products />
        </main>
      </div>
    </div>
  );
}

export default App;
