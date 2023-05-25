import React from "react";

const Banner = () => {
	return (
		<div className="bg-[#f0f2ee] h-[90vh]">
			<div className="flex container h-full justify-between">
				<div className="pt-10  " style={{ alignSelf: "center" }}>
					<h5 className="max-w-[100px] mb-2 font-medium">
						Best Ear Headphones
					</h5>
					<h1 className="max-w-[550px]">Find your Beats Studio.</h1>
					<button className="border mt-6 border-gray-600 px-5 font-semibold py-2">
						Shop Now
					</button>
				</div>
				<div className="" style={{ alignSelf: "flex-end" }}>
					<img
						src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.b3c73448.png&w=640&q=75"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
