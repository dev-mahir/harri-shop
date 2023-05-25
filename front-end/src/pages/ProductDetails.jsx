import React from "react";
import { Link } from "react-router-dom";
import Breadcumb from "../components/Breadcumb/Breadcumb";

const ProductDetails = () => {
	return (
		<div className="container py-14">
			<div className="flex gap-10">
				<div className="basis-[50%]">
					<Breadcumb />
					<div className="mt-2">
						<img
							className="object-cover max-h-[500px] w-full"
							src="https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fncm9NFx%2Fproduct-6.jpg&w=1080&q=75"
							alt=""
						/>
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

				<div className="basis-[50%]">right</div>
			</div>
		</div>
	);
};

export default ProductDetails;
