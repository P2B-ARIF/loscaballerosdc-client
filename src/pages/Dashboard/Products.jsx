import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Card from "../../components/Card";

const Products = () => {
	const { data } = useSelector(state => state.menu);
	const [menu, setMenu] = useState([]);
	const { item } = useParams();

	// console.log(menu, item);
	// const categories = [
	// 	{ href: "/dashboard/appetizers", category: "APPETIZERS" },
	// 	{ href: "/dashboard/salads", category: "SALADS" },
	// 	{
	// 		href: "/dashboard/burritos-y-enchiladas",
	// 		category: "BURRITOS Y ENCHILADAS",
	// 	},
	// 	{
	// 		href: "/dashboard/tacos-chimichangas-flautas",
	// 		category: "TACOS, CHIMICHANGAS, FLAUTAS",
	// 	},
	// 	{
	// 		href: "/dashboard/house-combinations",
	// 		category: "HOUSE COMBINATIONS",
	// 	},
	// 	{
	// 		href: "/dashboard/vegetarian's-favorites",
	// 		category: "VEGETARIAN'S FAVORITES",
	// 	},
	// 	{
	// 		href: "/dashboard/house-specialties-fajitas-y-parrillada",
	// 		category: "HOUSE SPECIALTIES FAJITAS Y PARRILLADA",
	// 	},
	// 	{ href: "/dashboard/seafood", category: "SEAFOOD" },
	// 	{
	// 		href: "/dashboard/chicken-and-meats",
	// 		category: "CHICKEN AND MEATS",
	// 	},
	// 	{ href: "/dashboard/drinks", category: "DRINKS" },
	// 	{ href: "/dashboard/house-wine", category: "HOUSE WINE" },
	// 	{ href: "/dashboard/happy-hour", category: "HAPPY HOUR" },
	// 	{ href: "/dashboard/soft-drinks", category: "SOFT DRINKS" },
	// ];

	useEffect(() => {
		if (data) {
			switch (item) {
				case "appetizers":
					return setMenu(
						[...data].filter(product => product.category === "APPETIZERS"),
					);
				case "salads":
					return setMenu(
						[...data].filter(product => product.category === "SALADS"),
					);
				case "burritos-y-enchiladas":
					return setMenu(
						[...data].filter(
							product => product.category === "BURRITOS Y ENCHILADAS",
						),
					);
				case "tacos-chimichangas-flautas":
					return setMenu(
						[...data].filter(
							product => product.category === "TACOS, CHIMICHANGAS, FLAUTAS",
						),
					);
				case "house-combinations":
					return setMenu(
						[...data].filter(
							product => product.category === "HOUSE COMBINATIONS",
						),
					);
				case "vegetarian's-favorites":
					return setMenu(
						[...data].filter(
							product => product.category === "VEGETARIAN'S FAVORITES",
						),
					);
				case "house-specialties-fajitas-y-parrillada":
					return setMenu(
						[...data].filter(
							product =>
								product.category === "HOUSE SPECIALTIES FAJITAS Y PARRILLADA",
						),
					);
				case "seafood":
					return setMenu(
						[...data].filter(product => product.category === "SEAFOOD"),
					);
				case "chicken-and-meats":
					return setMenu(
						[...data].filter(
							product => product.category === "CHICKEN AND MEATS",
						),
					);
				case "drinks":
					return setMenu(
						[...data].filter(product => product.category === "DRINKS"),
					);
				case "house-wine":
					return setMenu(
						[...data].filter(product => product.category === "HOUSE WINE"),
					);
				case "happy-hour":
					return setMenu(
						[...data].filter(product => product.category === "HAPPY HOUR"),
					);
				case "soft-drinks":
					return setMenu(
						[...data].filter(product => product.category === "SOFT DRINKS"),
					);

				default:
					break;
			}
		}
	}, [item, data]);

	return (
		<section>
			<h1 className='text-2xl font-bold text-slate-600 text-center mt-10 mb-5'>
				{menu[0]?.category}
			</h1>
			{menu[0]?.title && (
				<p className='text-base font-medium text-slate-600 text-center my-5'>
					{menu[0]?.title}
				</p>
			)}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 justify-items-center md:justify-items-start'>
				{menu?.map(item => (
					<Card key={item?._id} item={item} />
				))}
			</div>
		</section>
	);
};

export default Products;
