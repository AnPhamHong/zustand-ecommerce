import Content from "@/components/layout/Content";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import UnsupportedDeviceWrapper from "@/components/layout/UnsupportedDevice";

export default function MainLayout() {
  return (
    <UnsupportedDeviceWrapper>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </UnsupportedDeviceWrapper>
  );
}
