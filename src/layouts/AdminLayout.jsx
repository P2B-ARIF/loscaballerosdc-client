import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideMenuBar from "../pages/Dashboard/SideMenuBar";
import { useDispatch } from "react-redux";
import { fetchingMenu } from "../app/features/menuSlice";
import axios from "axios";

const AdminLayout = () => {
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) window.location.href = "/dashboard/login";
		dispatch(fetchingMenu());

		const fetch = async () => {
			const serverUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;

			const res = await axios.get(`${serverUrl}/menu/check`, {
				headers: {
					Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
					"Content-Type": "application/json",
				},
			});

			if (res.status === 201) {
				localStorage.removeItem("token");
				navigate("/dashboard/login");
				return;
			}
		};

		fetch();
	}, [dispatch]);

	return (
		<main className='flex'>
			<div>
				<SideMenuBar
					isSideNavOpen={isSideNavOpen}
					setIsSideNavOpen={setIsSideNavOpen}
				/>
			</div>
			{/* <SideMenuBar2 isOpen={isOpen} setIsOpen={setIsOpen} /> */}
			<div
				className={`${
					isSideNavOpen ? "mt-5" : "mt-20"
				} lg:mt-5 px-5 flex-1 lg:ml-[288px]`}
			>
				<Outlet />
			</div>
		</main>
	);
};

export default AdminLayout;
