import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ImagesProject.module.scss";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import images from "~/assets";

interface ImagesProjectProps {
  imagesSlider: string[];
  title: string;
}

export const ImagesProject = ({ imagesSlider, title }: ImagesProjectProps) => {
  return (
    <div
      className={clsx(styles.wrapper, "md:basic-1/2 rounded-4xl h-full")}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1} // 👈 Chỉ hiện 1 ảnh mỗi lần
        loop={true} // 👈 Chạy vòng lặp
        autoplay={{ delay: 3000 }} // 👈 Tự động chạy mỗi 3s
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className={clsx(styles.mySwiper, "mx-auto rounded-4xl")}
      >
        {imagesSlider.map((image, index) => (
          <SwiperSlide key={index} className="md:shrink-0">
            <img
              className="w-full max-w-full h-auto block object-cover rounded-4xl"
              src={image || images.noImages}
              alt={`${title} - ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={clsx("custom-prev", styles.customPrev)}>
        <ChevronLeft size={40}  />
      </button>
      <button className={clsx("custom-next", styles.customNext)}>
        <ChevronRight size={40} />
      </button>
    </div>
  );
};
