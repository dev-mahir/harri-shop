import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import Layout from "./components/Layout/Layout";
import Product from "./components/Catalog/Product/Product";
import Category from "./components/Catalog/Category/Category";
import { ToastContainer } from "react-toastify";
import Brand from "./components/Catalog/Brand/Brand";
import Tag from "./components/Catalog/Tag/Tag";
import Color from "./components/Catalog/Color/Color";
import Order from "./components/Catalog/Order/Order";

function App() {
	return (
		<>
			<ToastContainer />
			<Routes>
        <Route path="/" element={<Layout />}>
					<Route path="/dashboard" element={<Product />}></Route>
					<Route path="/product" element={<Product />}></Route>
					<Route path="/category" element={<Category />}></Route>
					<Route path="/brand" element={<Brand />}></Route>
					<Route path="/tag" element={<Tag />}></Route>
					<Route path="/color" element={<Color />}></Route>
					<Route path="/order" element={<Order />}></Route>
				</Route>
				<Route path="/login" element={<AuthLayout />}></Route>
				<Route path="/signup" element={<AuthLayout />}></Route>
			</Routes>
		</>
	);
}

export default App;
