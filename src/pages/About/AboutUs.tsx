import imgShoes from "../../assets/recycled-shoe-store-home-about-image.jpg";
import "../../styles/pages/AboutUs.scss";

function AboutUs() {
  return (
    <section className="about-container-sub">
      <div className="about-container">
        <div className="about-container-left">
          <img src={imgShoes} alt="about-us" />
        </div>
        <div className="about-container-right">
          <h3 className="about-subtitle">About Us</h3>
          <h2 className="about-title">
            Selected materials designed for comfort and sustainability
          </h2>
          <p className="about-description">
            Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget
            auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim
            pretium risus gravida ullamcorper adipiscing at ut magna.
          </p>
          <div className="about-read-more">Read more</div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
