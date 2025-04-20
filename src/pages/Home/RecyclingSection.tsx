import "@/styles/pages/RecyclingSection.scss";
import recyclingImg from "@/assets/recycled-shoe-store-recycled-circle-iamge.jpg";
import veganSvg01 from "@/assets/recycled-shoe-badge-1.svg";
import veganSvg02 from "@/assets/recycled-shoe-badge-2.svg";
import veganSvg03 from "@/assets/recycled-shoe-badge-3.svg";

function RecyclingSection({ hiddenImg }: { hiddenImg?: boolean }) {
  return (
    <section className="recycling-container-sub">
      <div className={`recycling-container ${hiddenImg ? "hidden" : ""}`}>
        {!hiddenImg && (
          <div className="recycling-img">
            <img src={recyclingImg} alt="recycled-shoe-store-recycled-circle" />
          </div>
        )}
        <div className="recycling-content">
          <p className="recycling-description">
            Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam
            sapien pulvinar laoreet vulputate sem aliquet phasellus egestas
            felis, est, vulputate morbi massa mauris vestibulum dui odio.
          </p>
          <div className="recycling-icons">
            <img src={veganSvg01} alt="veganSvg01" />
            <img src={veganSvg02} alt="veganSvg01" />
            <img src={veganSvg03} alt="veganSvg01" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecyclingSection;
