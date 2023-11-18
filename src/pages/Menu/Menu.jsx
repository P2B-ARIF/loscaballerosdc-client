import  { useState, useEffect } from "react";
import image from "./../../assets/img1.jpeg";
import file from "./../../assets/menu-nov-2023.pdf";
import { useSelector } from "react-redux";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";
import cover from "./../../assets/pdf-cover.png";


const Menu = () => {
	const { data } = useSelector(state => state.menu);
	const [menu, setMenu] = useState([]);
	const [item, setItem] = useState("APPETIZERS");

	const handleDownload = () => {
		const pdfFilePath = file;
		const link = document.createElement("a");
		link.download = "menu.pdf";
		link.href = pdfFilePath;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const categories = [
		{ category: "APPETIZERS" },
		{ category: "SALADS" },
		{ category: "BURRITOS Y ENCHILADAS" },
		{ category: "TACOS, CHIMICHANGAS, FLAUTAS" },
		{ category: "HOUSE COMBINATIONS" },
		{ category: "VEGETARIAN'S FAVORITES" },
		{ category: "HOUSE SPECIALTIES FAJITAS Y PARRILLADA" },
		{ category: "SEAFOOD" },
		{ category: "CHICKEN AND MEATS" },
		{ category: "DRINKS" },
		{ category: "HOUSE WINE" },
		{ category: "HAPPY HOUR" },
		{ category: "SOFT DRINKS" },
	];

	useEffect(() => {
		if (data) {
			setMenu(data?.filter(i => i.category === item));
		}
	}, [data, item]);

	// useEffect(() => {
	// 	if (data) {
	// 		switch (item) {
	// 			case "appetizers":
	// 				return setMenu(
	// 					[...data].filter(product => product.category === "APPETIZERS"),
	// 				);
	// 			case "salads":
	// 				return setMenu(
	// 					[...data].filter(product => product.category === "SALADS"),
	// 				);
	// 			case "burritos-y-enchiladas":
	// 				return setMenu(
	// 					[...data].filter(
	// 						product => product.category === "BURRITOS Y ENCHILADAS",
	// 					),
	// 				);
	// 			case "tacos-chimichangas-flautas":
	// 				return setMenu(
	// 					[...data].filter(
	// 						product => product.category === "TACOS, CHIMICHANGAS, FLAUTAS",
	// 					),
	// 				);
	// 			case "house-combinations":
	// 				return setMenu(
	// 					[...data].filter(
	// 						product => product.category === "HOUSE COMBINATIONS",
	// 					),
	// 				);
	// 			case "vegetarian's-favorites":
	// 				return setMenu(
	// 					[...data].filter(
	// 						product => product.category === "VEGETARIAN'S FAVORITES",
	// 					),
	// 				);
	// 			case "house-specialties-fajitas-y-parrillada":
	// 				return setMenu(
	// 					[...data].filter(
	// 						product =>
	// 							product.category === "HOUSE SPECIALTIES FAJITAS Y PARRILLADA",
	// 					),
	// 				);
	// 			case "seafood":
	// 				return setMenu(
	// 					[...data].filter(product => product.category === "SEAFOOD"),
	// 				);
	// 			case "chicken-and-meats":
	// 				return setMenu(
	// 					[...data].filter(
	// 						product => product.category === "CHICKEN AND MEATS",
	// 					),
	// 				);
	// 			case "drinks":
	// 				return setMenu(
	// 					[...data].filter(product => product.category === "DRINKS"),
	// 				);
	// 			case "house-wine":
	// 				return setMenu(
	// 					[...data].filter(product => product.category === "HOUSE WINE"),
	// 				);
	// 			case "happy-hour":
	// 				return setMenu(
	// 					[...data].filter(product => product.category === "HAPPY HOUR"),
	// 				);
	// 			case "soft-drinks":
	// 				return setMenu(
	// 					[...data].filter(product => product.category === "SOFT DRINKS"),
	// 				);

	// 			default:
	// 				break;
	// 		}
	// 	}
	// }, [item, data]);

	return (
		<section className='bg-[#f5f5f5]'>
			<div
				className='h-[50vh] flex items-center relative '
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				{/* Overlay with light gray color */}
				<div className='absolute inset-0 bg-gray-700 opacity-60'></div>

				<p className='absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[50%] text-7xl text-white font-satisfy z-20'>
					Menu.
				</p>
			</div>

			{/* <button className='bg-green-700 p-3 rounded-lg fixed top-[47%] -right-1 z-10 flex gap-1 items-center text-white'>
				<FaCartPlus />0
			</button> */}

			<div className='py-20 container mx-auto px-5'>
				<div className='my-5 flex flex-col items-center gap-5 mx-auto'>
					<h1 className='text-3xl font-bold font-poppins'>Our Menu</h1>
					<img src={cover} alt='' className='w-[220px]' />
					<div className='flex items-center gap-5 md:gap-10'>
						<label className='h-[2px] shadow-lg w-[100px] md:w-[300px] bg-slate-700 flex'></label>
						<button
							onClick={handleDownload}
							className='bg-slate-700 text-slate-100 py-2 px-3 md:px-5'
						>
							Download Menu
						</button>
						<label className='h-[2px] shadow-lg w-[100px] md:w-[300px] bg-slate-700 flex'></label>
					</div>
				</div>
				<br />
				<section className='h-full w-[100%] hidden md:flex'>
					<div className='w-[33%]'>
						{categories?.map((category, i) => (
							<h1
								key={i}
								onClick={() => setItem(category.category)}
								className={`${
									item === category.category &&
									"border-[1px] border-l-4 relative left-[1px] border-yellow-500 border-r-transparent bg-white"
								} w-full p-5 font-medium bg-transparent cursor-pointer`}
							>
								{category.category}
							</h1>
						))}
					</div>
					<div className='w-[70%] min-h-[800px] bg-white border rounded-md rounded-tl-none'>
						<div className='w-full grid grid-cols-1 md:grid-cols-2 p-5'>
							{menu?.map((item, i) => {
								const price = item.price;
								return (
									<div
										key={i}
										className={`border-b-[1px] ${
											i % 2 === 0 && "md:border-r-[1px]"
										} p-10 px-7 `}
									>
										<div className='text-xl font-medium flex items-start justify-between gap-2'>
											<h1 className='min-w-1/2'>{item.name}</h1>
											<div className='text-base flex flex-col items-end text-right'>
												{price.includes("/") ? (
													price.split("/").map(i => <h2 key={i}>{i}</h2>)
												) : (
													<h2 className='text-xl font-medium'>{price}</h2>
												)}
											</div>
										</div>
										<p className='mt-2 text-slate-500'>{item.description}</p>
									</div>
								);
							})}
							{menu?.length % 1 === 0 &&
								data
									?.slice(0, 1)
									.map(i => (
										<div
											key={i}
											className={`border-b-[1px] w-full h-full flex`}
										></div>
									))}
						</div>
					</div>
				</section>

				<section className='flex md:hidden'>
					<Accordion defaultIndex={[0]} allowMultiple className="w-full">
						{categories?.map((cate, i) => {
							let filters = data?.filter(i => i.category === cate.category);

							return (
								<AccordionItem key={i}>
									<h2>
										<AccordionButton>
											<Box as='span' flex='1' textAlign='left'>
												{cate?.category}
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										{filters?.map((item, i) => {
											const price = item.price;

											return (
												<div
													key={i}
													className={`border-t-[1px] ${
														i % 2 === 0 && "md:border-r-[1px]"
													} p-5`}
												>
													<div className='text-xl font-medium flex items-start justify-between gap-2'>
														<h1 className='min-w-1/2'>{item.name}</h1>
														<div className='text-base flex flex-col items-end text-right'>
															{price.includes("/") ? (
																price.split("/").map(i => <h2 key={i}>{i}</h2>)
															) : (
																<h2 className='text-xl font-medium'>{price}</h2>
															)}
														</div>
													</div>
													<p className='mt-2 text-slate-500'>
														{item.description}
													</p>
												</div>
											);
										})}
									</AccordionPanel>
								</AccordionItem>
							);
						})}

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as='span' flex='1' textAlign='left'>
										Section 2 title
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</section>

				{/* <Link
					to={"/menu"}
					className='font-bold text-green-600 bg-green-200 rounded-md py-2 px-5 border-l-4 border-green-600'
				>
					APPETIZERS
				</Link>
				<br />
				<br /> */}
				{/* <div className='flex gap-5 flex-wrap items-center'>
					{categories?.map((item, i) => (
						<Link
							to={`/menu/${item}}`}
							key={item}
							className={`font-bold ${
								i === 0 &&
								"text-green-600 bg-green-200 rounded-md py-2 px-5 border-l-4 border-green-600"
							}`}
						>
							{item}
						</Link>
					))}
				</div> */}

				{/* <br />
				<br />
				<div className='grid grid-cols-2 gap-5'>
					{Array.from(Array(10).keys()).map(item => (
						<article
							key={item}
							className='h-[150px] flex justify-between border-2 border-green-700 rounded-lg overflow-hidden'
						>
							<div className='w-[60%] pl-10 py-8 flex flex-col'>
								<p className='text-2xl font-berkshire-swash'>
									Pupusas (Queso & Frijol or Mixta)
								</p>
								<button className='bg-green-600 py-2 px-3 text-white rounded-md mt-2 self-end'>
									<FaCartPlus />
								</button>
							</div>
							<div className='w-[30%] relative'>
								<span className='absolute top-1 right-2 bg-secondary-color py-1 px-3 '>
									$2.99
								</span>
								<img className='w-full h-full object-cover' src={food} alt='' />
							</div>
						</article>
					))}
				</div> */}
			</div>
		</section>
	);
};

export default Menu;
