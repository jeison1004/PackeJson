
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
        <div className="bg-green-100 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Moda que <span className="font-extrabold">Define tu Estilo</span>
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Descubre nuestra colección exclusiva de ropa de alta calidad para<br />
            hombres y mujeres
          </p>
          <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-md font-semibold">
            Explorar Catálogo
          </button>
        </div>
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
