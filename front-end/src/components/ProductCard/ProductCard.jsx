import React, { useState } from "react";
import { Link } from "react-router-dom";
import SingleProductInfo from "../ProductDetails/SingleProductInfo";

import { AiOutlineEye } from "react-icons/ai";
import useModal from "../../hooks/useModal";
import { toast } from "react-hot-toast";

const ProductCard = () => {
	const [ref, show, setShow] = useModal(false);

	const [quickView, setQuickView] = useState(true);

	const handleAddWishlist = () => {
		toast.success("Product added in wishlist");
	};

	return (
		<>
			{show && (
				<div className="fixed top-0 left-0 w-full h-full bg-black/20 z-50 flex justify-center items-center px-5 py-5">
					<div ref={ref} className="bg-white rounded-md p-5 relative">
						<button
							onClick={() => setShow(!show)}
							className="absolute top-2 right-2">
							<i className="text-2xl bx bx-x"></i>
						</button>
						<SingleProductInfo />
					</div>
				</div>
			)}

			<div className="group">
				<div className="h-[300px] relative overflow-hidden">
					<span className="bg-primary text-white text-xs left-2 top-2 px-[6px] py-[2px] absolute">
						-12%
					</span>
					<Link to="/">
						<img
							className="w-full h-full object-cover"
							src="/images/product1.webp"
							alt=""
						/>
					</Link>

					<button
						onClick={handleAddWishlist}
						className="absolute  h-8 w-8 flex justify-center items-center hover:bg-theme_color hover:text-white bg-white translate-x-10 group-hover:translate-x-0 duration-300 px-1 border top-10 right-1 border-b-b_gray">
						<i className="text-xl bx bx-heart"></i>
						<span className="tooltip">Add To Wishlist</span>
					</button>

					<button
						onClick={() => setShow(!show)}
						className="absolute h-8 w-8 flex justify-center items-center group hover:bg-theme_color  bg-white translate-x-10 group-hover:translate-x-0 duration-300 px-1 border top-20 right-1 border-b-b_gray">
						<AiOutlineEye
							size={22}
							className="text-[#222] hover:fill-white"
						/>
						<span className="tooltip">Quick View</span>
					</button>

					<button className="bg-primary text-[15px] flex items-center justify-center gap-x-3 text-white py-[6px] w-full duration-300 hover:bg-theme_color  group-hover:-translate-y-10">
						<i className="bx text-xl bx-cart-alt"></i> Add to cart
					</button>
				</div>

				<div className="mt-5">
					<Link to="">
						<h2 className="text-sm leading-[17px] text-primary   hover:text-theme_color">
							Buy Guild plaener -900w
						</h2>
					</Link>
					<span className="inline-block mt-2">$239.00</span>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
