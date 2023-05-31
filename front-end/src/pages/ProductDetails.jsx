import React from "react";
import { Link } from "react-router-dom";
import Breadcumb from "../components/Breadcumb/Breadcumb";

import RelatedProduct from "../components/ProductDetails/RelatedProduct";
import SingleProductInfo from "../components/ProductDetails/SingleProductInfo";

const ProductDetails = () => {
	return (
		<div className="container py-14">
			<Breadcumb />

			<SingleProductInfo />

			<div>
				<RelatedProduct />
			</div>
		</div>
	);
};

export default ProductDetails;
