import { useState, useEffect } from "react";
import logo from "./../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import pdfMenu from "./../assets/menu-nov-2023.pdf";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
	const [lastScrollY, setLastScrollY] = useState(0);
	const [show, setShow] = useState("translate-y-0");
	const [mobileMenu, setMobileMenu] = useState(false);
	const [blur, setBlur] = useState(false);
	// const navigate = useNavigate();
	// const [url, setURL] = useState(window.location.pathname);

	const controlNavbar = () => {
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY && !mobileMenu) {
				setShow("-translate-y-[120px]");
			} else {
				setShow("shadow-sm");
			}
		} else {
			setShow("translate-y-0");
		}
		if (window.scrollY > 40) {
			setBlur(true);
		} else {
			setBlur(false);
		}
		setLastScrollY(window.scrollY);
		// console.log(lastScrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [lastScrollY]);

	// useEffect(() => {
	// 	setURL(window.location.pathname);
	// }, [navigate]);
	const url = "";
	return (
		<div
			className={`w-full z-30 fixed right-[50%] translate-x-[50%] top-0 transition-transform duration-300 ${show} ${
				blur ? "backdrop-blur-md bg-[#ffffff81] shadow-lg" : "bg-white"
			}`}
		>
			{show && !blur && (
				<div className='text-center justify-center text-base p-2 bg-primary-color text-secondary-color font-medium flex items-center'>
					<div className='text-white md:flex items-center gap-2 text-center'>
						<h3 className='flex items-center text-center justify-center'>
							<MdLocationOn className='text-secondary-color text-xl mr-1' />
							308 Pennsylvania Ave SE, Washington, DC |
						</h3>
						<h3 className='flex items-center text-center justify-center'>
							<FaPhoneAlt className='text-secondary-color mr-1' />
							(202) 909-7383
						</h3>
					</div>
				</div>
			)}

			<nav className='px-5 md:px-0 container items-center justify-between mx-auto md:flex py-3'>
				<div className='flex items-center justify-between'>
					<Link to={"/"}>
						<img src={logo} alt='' className=' h-[70px]' />
					</Link>
					{mobileMenu ? (
						<MdOutlineClose
							className='md:hidden text-2xl transition-all duration-300 cursor-pointer hover:bg-red-300 w-[45px] h-[45px] p-2 rounded-xl'
							onClick={() => setMobileMenu(false)}
						/>
					) : (
						<FaBars
							className='md:hidden text-2xl transition-all duration-300 cursor-pointer hover:bg-red-300 w-[45px] h-[45px]  p-2 rounded-xl'
							onClick={() => setMobileMenu(true)}
						/>
					)}
				</div>
				<div
					className={`${
						!mobileMenu && window.innerWidth < 700 ? "hidden" : "block"
					}`}
				>
					<ul className='flex flex-col md:flex-row my-10 md:my-0 text-center gap-10 items-center text-[20px]'>
						<li>
							<NavLink
								to={"/"}
								// className={`hover:text-secondary-color transition-all duration-200 ease-linear ${
								// 	url == "/" && "text-secondary-color"
								// }`}
								className={({ isActive, isPending }) =>
									isPending
										? "hover:text-secondary-color transition-all duration-200 ease-linear"
										: isActive
										? "text-secondary-color"
										: ""
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"/menu"}
								className={({ isActive, isPending }) =>
									isPending
										? "hover:text-secondary-color transition-all duration-200 ease-linear"
										: isActive
										? "text-secondary-color"
										: ""
								}
							>
								Menu
							</NavLink>
						</li>
						<li>
							<button
								onClick={() => window.open(pdfMenu, "_blank")}
								className={`hover:text-secondary-color transition-all duration-200 ease-linear `}
							>
								Lunch Specials
							</button>
						</li>
						<li>
							<NavLink
								to={"/about"}
								className={({ isActive, isPending }) =>
									isPending
										? "hover:text-secondary-color transition-all duration-200 ease-linear"
										: isActive
										? "text-secondary-color"
										: ""
								}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"/contact-us"}
								className={({ isActive, isPending }) =>
									isPending
										? "hover:text-secondary-color transition-all duration-200 ease-linear"
										: isActive
										? "text-secondary-color"
										: ""
								}
							>
								Contact Us
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"/contact-us"}
								className='py-3 px-5 rounded-full font-medium text-sm text-white hover:text-black bg-primary-color hover:bg-secondary-color transition-all ease-out duration-300'
							>
								RESERVATION
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
