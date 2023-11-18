import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiBoxList } from "react-icons/ci";
import { useEffect, useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import CreateMenuModal from "../../components/CreateMenuModal";
import { IoClose } from "react-icons/io5";

export default function SideMenuBar({ isSideNavOpen, setIsSideNavOpen }) {
	// const [isSideNavOpen, setIsSideNavOpen] = useState(false);
	const [createMenu, setCreateMenu] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth > 1024) {
				setIsSideNavOpen(true);
			} else if (!isSideNavOpen && window.innerWidth <= 1023) {
				setIsSideNavOpen(false);
			}
		});
		return () => {
			window.removeEventListener("resize", () => {
				console.log("removed");
			});
		};
	}, [isSideNavOpen, setIsSideNavOpen]);

	useEffect(() => {
		if (window.innerWidth > 1024) {
			setIsSideNavOpen(true);
		} else if (!isSideNavOpen && window.innerWidth <= 1023) {
			setIsSideNavOpen(false);
		}
	}, []);

	const categories = [
		{ href: "/dashboard/appetizers", category: "APPETIZERS" },
		{ href: "/dashboard/salads", category: "SALADS" },
		{
			href: "/dashboard/burritos-y-enchiladas",
			category: "BURRITOS Y ENCHILADAS",
		},
		{
			href: "/dashboard/tacos-chimichangas-flautas",
			category: "TACOS, CHIMICHANGAS, FLAUTAS",
		},
		{
			href: "/dashboard/house-combinations",
			category: "HOUSE COMBINATIONS",
		},
		{
			href: "/dashboard/vegetarian's-favorites",
			category: "VEGETARIAN'S FAVORITES",
		},
		{
			href: "/dashboard/house-specialties-fajitas-y-parrillada",
			category: "HOUSE SPECIALTIES FAJITAS Y PARRILLADA",
		},
		{ href: "/dashboard/seafood", category: "SEAFOOD" },
		{
			href: "/dashboard/chicken-and-meats",
			category: "CHICKEN AND MEATS",
		},
		{ href: "/dashboard/drinks", category: "DRINKS" },
		{ href: "/dashboard/house-wine", category: "HOUSE WINE" },
		{ href: "/dashboard/happy-hour", category: "HAPPY HOUR" },
		{ href: "/dashboard/soft-drinks", category: "SOFT DRINKS" },
	];

	return (
		<>
			{/*  <!-- Component: Side navigation menu with user profile and alert message --> */}
			{/*  <!-- Mobile trigger --> */}
			<button
				title='Side navigation'
				type='button'
				className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
					isSideNavOpen
						? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
						: ""
				}`}
				aria-haspopup='menu'
				aria-label='Side navigation'
				aria-expanded={isSideNavOpen ? " true" : "false"}
				aria-controls='nav-menu-4'
				onClick={() => setIsSideNavOpen(!isSideNavOpen)}
			>
				<div className='absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform'>
					<span
						aria-hidden='true'
						className='absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300'
					></span>
					<span
						aria-hidden='true'
						className='absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300'
					></span>
					<span
						aria-hidden='true'
						className='absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300'
					></span>
				</div>
			</button>
			{/* sm:relative lg:relative */}
			{/*  <!-- Side Navigation --> */}
			<aside
				id='nav-menu-4'
				aria-label='Side navigation'
				className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 min-h-screen ${
					isSideNavOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className='flex flex-col items-center gap-4 border-b border-slate-200 p-3 relative'>
					<div className='shrink-0'>
						<Link
							to='/dashboard'
							className='relative flex h-full w-[90px] items-center justify-center rounded-full text-white'
						>
							<img
								src={logo}
								alt='user name'
								title='user name'
								className='max-w-full rounded-full '
							/>
						</Link>
					</div>
					<div className='flex min-h-[1rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center'>
						<h4 className='w-full truncate text-base text-slate-700 font-bold'>
							LOS CABALLEROS
						</h4>
						<IoClose
							onClick={() => setIsSideNavOpen(false)}
							className='text-2xl absolute top-5 right-2 hidden sm:block lg:hidden cursor-pointer'
						/>
					</div>
				</div>
				<nav
					aria-label='side navigation'
					className='flex-1 divide-y divide-slate-100 overflow-auto '
				>
					<div>
						<ul className='flex flex-1 flex-col gap-1 py-3'>
							<div>
								<li className='px-3'>
									<Link
										to={"/dashboard"}
										className='flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-200 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 '
									>
										<CiBoxList className='w-[20px] text-xl' />
										<div className='flex w-full flex-1 gap-0 overflow-hidden truncate text-base'>
											All Products
										</div>
									</Link>
								</li>
								<li className='px-3 w-full'>
									<button
										onClick={() => setCreateMenu(true)}
										className='flex w-full items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-200 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 '
									>
										<MdAssignmentAdd className='w-[20px] text-xl' />
										<div className='flex w-full flex-1 gap-0 overflow-hidden truncate text-base'>
											Create Menu Item
										</div>
									</button>
								</li>
							</div>

							<hr />
							{categories?.map((category, index) => (
								<li key={index} className='px-1 pl-5'>
									<Link
										to={category.href}
										className='flex gap-3 rounded p-2 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-200 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 '
									>
										<span className='font-bold text-sm text-slate-600'>
											{index + 1}-
										</span>
										{/* <CiBoxList className='w-[20px] text-xl' /> */}
										<div className='flex w-full flex-1 gap-0 overflow-hidden truncate whitespace-normal text-sm'>
											{category.category}
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
				<CreateMenuModal isOpen={createMenu} setIsOpen={setCreateMenu} />

				<footer className='border-t border-slate-200 p-3'>
					<button
						onClick={() => {
							localStorage.removeItem("token");
							navigate("/");
						}}
						className='flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-emerald-500 '
					>
						<div className='flex items-center self-center '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='h-6 w-6'
								aria-label='Dashboard icon'
								role='graphics-symbol'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>
						<div className='flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium'>
							Logout
						</div>
					</button>
				</footer>
			</aside>

			{/*  <!-- Backdrop --> */}
			<div
				className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
					isSideNavOpen ? "block" : "hidden"
				}`}
				onClick={() => setIsSideNavOpen(false)}
			></div>
			{/*  <!-- End Side navigation menu with user profile and alert message --> */}
		</>
	);
}
