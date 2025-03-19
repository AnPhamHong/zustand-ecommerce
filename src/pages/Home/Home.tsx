import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import AboutUs from "../About/AboutUs";
import BestSeller from "../Products/BestSeller";
import NewArrivals from "../Products/NewArrivals";
import HeroBanner from "./HeroBanner";
import PromotionBanner from "./PromotionBanner";
import RecyclingSection from "./RecyclingSection";
import ShoeMaterial from "./ShoeMaterial";

const Home: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <AboutUs />
      <ShoeMaterial />
      <BestSeller />
      <PromotionBanner />
      <NewArrivals />
      <RecyclingSection />
      <CustomerReviews />
    </div>
  );
};

export default Home;
