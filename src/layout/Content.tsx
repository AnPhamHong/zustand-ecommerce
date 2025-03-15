import Sidebar from "./Sidebar";
import Recommended from "../pages/Recommended/Recommended";
import Products from "../pages/Product/Products";

function Content() {
  return (
    <div className="container">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="content">
        <Recommended />
        <Products />
      </main>
    </div>
  );
}

export default Content;
