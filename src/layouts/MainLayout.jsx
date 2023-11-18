import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { fetchingMenu } from "../app/features/menuSlice";

const MainLayout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchingMenu());
	}, [dispatch]);

	return (
		<main>
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default MainLayout;
