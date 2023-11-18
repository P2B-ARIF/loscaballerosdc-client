import { useEffect, useState } from "react";
import Header from "../../components/Header";
import image from "./../../assets/img3.jpeg";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import file from "./../../assets/menu-nov-2023.pdf";

const Home = () => {
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

	return (
		<div>
			<Header />
			<div className='bg-yellow-50 text-center'>
				<div className='container mx-auto py-5'>
					<h1 className='text-5xl font-satisfy'>Welcome to</h1>
					<p className='text-xl font-poppins mt-4 font-medium'>
						Los carnales tex mex grill the best mexican food
					</p>
				</div>
			</div>
			{/* <button className='bg-green-700 p-3 rounded-lg fixed top-[47%] -right-1 z-10 flex gap-1 items-center text-white'>
				<FaCartPlus />0
			</button> */}

			<section>
				<div className='flex items-end justify-center text-center h-[50vh]'>
					<div
						className='p-[40px] md:p-[80px] px-[70px] md:px-[150px] bg-slate-100 h-[40vh] relative'
						style={{
							backgroundImage: `url('${image}')`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className='absolute inset-0 bg-gray-700 opacity-60'></div>
						<div className='relative mt-16 z-20 text-white'>
							<h1 className='text-5xl font-satisfy'>
								Welcome to our happy hour menu
							</h1>{" "}
							<br />
							<p className='font-satisfy text-lg font-bold text-yellow-500'>
								Come Enjoy Happy Hour
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='my-10'>
				<div>
					<div className='container mx-auto my-5 flex flex-col items-center gap-5'>
						<h1 className='text-5xl font-bold font-satisfy'>Our Menu</h1>
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

					<section className='h-full w-[100%] bg-yellow-50 border-2 border-t-yellow-500'>
						<div className='container mx-auto hidden md:flex py-2'>
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
												<p className='mt-2 text-slate-500'>
													{item.description}
												</p>
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
						</div>
					</section>

					<section className='flex md:hidden'>
						<Accordion defaultIndex={[0]} allowMultiple>
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
																	price
																		.split("/")
																		.map(i => <h2 key={i}>{i}</h2>)
																) : (
																	<h2 className='text-xl font-medium'>
																		{price}
																	</h2>
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
						</Accordion>
					</section>
				</div>
			</section>
		</div>
	);
};

export default Home;
