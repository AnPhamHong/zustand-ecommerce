import React from "react";
import imgMaterial from "../../assets/recycled-shoe-store-how-shoes-are-made-image.png";
import "../../styles/pages/ShoeMaterial.scss";

const materials = [
  {
    id: 1,
    title: "Pet canvas",
    desc:
      "Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas nulla cursus",
    position: { top: "15%", left: "30%" },
  },
  {
    id: 2,
    title: "Algae foam + vegan glue",
    desc: "Enim tincidunt donec vulputate magna pharetra mattis in",
    position: { top: "60%", left: "35%" },
  },
  {
    id: 3,
    title: "Organic cotton",
    desc: "A vel ipsum, sed dignissim elementum ultrices amet",
    position: { top: "30%", right: "30%" },
  },
  {
    id: 4,
    title: "Upcycled plastic bottles",
    desc:
      "Pellentesque viverra amet netus facilisis amet felis odio tortor orci cursus est",
    position: { bottom: "15%", right: "35%" },
  },
];

const ShoeMaterial: React.FC = () => {
  return (
    <section className="shoes-material-container">
      <div className="shoes-material">
        <h2 className="shoes-material-subtitle">See how your shoes are made</h2>
        <p className="shoes-material-desc">
          Urna, felis enim orci accumsan urna blandit egestas mattis egestas
          feugiat viverra ornare donec adipiscing semper aliquet integer risus
          leo volutpat nulla enim ultrices
        </p>
        <div className="shoes-material-content">
          <div className="shoes-material-content-left">
            {materials.slice(0, 2).map((item) => (
              <div key={item.id} className="material">
                <span className="material-item">0{item.id}.</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="shoes-material-content-center">
            <img src={imgMaterial} alt="shoe" />
          </div>
          <div className="shoes-material-content-right">
            {materials.slice(2).map((item) => (
              <div key={item.id} className="material">
                <span className="material-item">0{item.id}.</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoeMaterial;
