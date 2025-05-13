import lookbookData from "@/db/dtLookbook";
import "@/styles/pages/Lookbook.scss";

export default function Lookbook() {
  return (
    <div className="look-book-container">
      <h1>Lookbook</h1>
      {lookbookData.map((item) => {
        return (
          <div key={item.id} className="look-book-item">
            <img src={item.image} alt={item.link} />
            <div className="look-book-box">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <a href="#">Shop now</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
