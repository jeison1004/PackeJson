
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carrusel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      navigation
      className="h-100 mt-23"
    >
      <SwiperSlide>
        <img src="ruta/imagen1.jpg" alt="imagen 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="ruta/imagen2.jpg" alt="imagen 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="ruta/imagen3.jpg" alt="imagen 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carrusel;
