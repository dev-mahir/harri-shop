import React from "react";
import { Link } from "react-router-dom";

const SingleProductInfo = () => {
	return (
		<div className="flex gap-10">
			<div className="basis-[50%]">
				<div className="mt-2">
					<div className="relative">
						<img
							className="object-cover max-h-[350px] w-full"
							src="https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fncm9NFx%2Fproduct-6.jpg&w=1080&q=75"
							alt=""
						/>
						<p className="text-xs  bg-theme_color px-2 py-1 rounded-sm text-white absolute top-2 left-2">
							-22%
						</p>
					</div>
					<div className="flex flex-wrap gap-x-2 mt-2">
						<button className="border  border-red-600 h-20 w-20">
							<img
								className="w-full h-full"
								src="https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fncm9NFx%2Fproduct-6.jpg&w=1080&q=75"
								alt=""
							/>
						</button>
						<button className="border  border-red-600 h-20 w-20">
							<img
								className="w-full h-full"
								src="https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fncm9NFx%2Fproduct-6.jpg&w=1080&q=75"
								alt=""
							/>
						</button>
					</div>
				</div>
			</div>
			<div className="basis-[50%] pr-10">
				<div
					className="space-y-4 mb-5
                    ">
					<p className="border border-gray-100 px-3 py-1 inline-block text-theme_color">
						22 Stock
					</p>
					<h2>ViewSonic Professional Monitor</h2>
					<p>
						Shop Harry.com for every day low prices. Free shipping
						on orders $35+ or Pickup In-store and get
					</p>
					<div className="flex items-center gap-x-1">
						<p className="line-through">$2541</p>
						<p className="font-semibold text-lg">$2541</p>
					</div>
					<div className="flex gap-x-2 mb-5">
						<button className="bg-[#111] px-8 py-[10px] text-white duration-300 hover:bg-theme_color">
							Add to Cart{" "}
						</button>
						<button className="bg-theme_color px-8 py-[10px] text-white duration-300 hover:bg-[#111]">
							Add to Wishlist{" "}
						</button>
					</div>
				</div>
				<div className="divider"></div>
				<div className="space-y-2 mt-5">
					<p>
						<b>SKU</b>:29045-SB-6
					</p>
					<p>
						<b>Categories</b>:Mobile phone, Laptop
					</p>
					<div>
						<p className="flex items-center gap-x-2">
							<b>Share</b>:
							<div className="flex items-center gap-x-2">
								<Link className="" to="">
									{" "}
									<i className="bx bxl-facebook"></i>
								</Link>
								<Link className="" to="">
									{" "}
									<i className="bx bxl-facebook"></i>
								</Link>
								<Link className="" to="">
									{" "}
									<i className="bx bxl-facebook"></i>
								</Link>
								<Link className="" to="">
									{" "}
									<i className="bx bxl-facebook"></i>
								</Link>
							</div>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProductInfo;
