import React from "react";
import { Link } from "react-router-dom";

const Breadcumb = () => {
	return (
		<div className="flex items-center gap-x-[1px]">
			<Link to="" className="flex items-center">
				<i className="text-lg bx bx-home-alt mr-[2px]"></i> Home
			</Link>

			<i className="text-lg bx bx-chevron-right"></i>

			<Link to="">Apple watch</Link>
			<i className="text-lg bx bx-chevron-right"></i>
			<span>Apple Watch Series 7</span>
		</div>
	);
};

export default Breadcumb;
