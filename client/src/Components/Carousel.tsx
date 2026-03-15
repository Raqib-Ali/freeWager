import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function CarouselExample() {
  const items = [
    { name: "AC Services", image: "ac-service.jpg" },
    { name: "Carpenter", image: "carpenter.jpg" },
    { name: "Electricians", image: "electrician.jpg" },
    { name: "Home Renovate", image: "renovate-home.jpg" },
  ];

  return (
    <div className="min-w-0 flex-1 rounded-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {items.map((item) => (
          <SwiperSlide key={item.name}>
            <div className="">
              <div className="slide">
                <img
                  className="rounded-2xl aspect-video"
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
