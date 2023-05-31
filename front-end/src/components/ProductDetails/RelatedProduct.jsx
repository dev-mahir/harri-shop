import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

const RelatedProduct = () => {
	return (
		<div className="mt-10">
			<h3 className="text-2xl font-semibold border-l-4 pl-2 border-theme_color">
				Related products
			</h3>
			<div className="divider my-4"></div>
			<Swiper
				spaceBetween={10}
				slidesPerView={4}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}>
				<SwiperSlide>
					<ProductCard />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default RelatedProduct;
