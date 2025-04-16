import CustomerReviews from "@/components/CustomerReviews/CustomerReviews";
import AboutUs from "@/pages/About/AboutUs";
import HeroBanner from "@/pages/Home/HeroBanner";
import PromotionBanner from "@/pages/Home/PromotionBanner";
import RecyclingSection from "@/pages/Home/RecyclingSection";
import ShoeMaterial from "@/pages/Home/ShoeMaterial";
import BestSeller from "@/pages/Products/BestSeller";
import NewArrivals from "@/pages/Products/NewArrivals";

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
