import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import * as promotions from "../../assets/imgPromotion";
import "@/styles/pages/PromotionBanner.scss";

const PromotionBanner: React.FC = () => {
  return (
    <section className="promotion-banner">
      <Splide
        options={{
          type: "loop", // Chạy lặp vô tận
          autoplay: true, // Tự động chạy
          interval: 1000, // 3 giây đổi ảnh
          pauseOnHover: true, // Dừng khi hover
          arrows: false, // Ẩn nút điều hướng (nếu cần)
          pagination: true, // Hiển thị dấu chấm điều hướng
          speed: 1000, // Tốc độ chuyển ảnh (1 giây)
          perPage: 2, // Hiển thị 3 ảnh mỗi lần
          perMove: 1, // Di chuyển từng ảnh một
          gap: "2rem", // Khoảng cách giữa ảnh
          width: "100%", // Full chiều rộng
          height: "500px", // Chiều cao cố định
          fixedWidth: "30%", // Định nghĩa chiều rộng mỗi slide
          fixedHeight: "100%", // Định nghĩa chiều rộng mỗi slide
          breakpoints: {
            1024: { perPage: 2, height: "350px" }, // Tablet: Hiển thị 2 ảnh
            768: { perPage: 1, height: "300px" }, // Mobile: Hiển thị 1
          },
          focus: "center",
        }}
        aria-label="Promotion Images"
      >
        {[...Array(11)].map((_, index) => {
          const key =
            index >= 9 ? `promotion_${index + 1}` : `promotion_0${index + 1}`; // Vì index bắt đầu từ 0, nên cộng thêm 1 nếu tên file là từ "promotion_01"
          return (
            <SplideSlide key={index}>
              <img
                src={promotions[key as keyof typeof promotions]}
                alt={`Image ${index + 1}`}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default PromotionBanner;
