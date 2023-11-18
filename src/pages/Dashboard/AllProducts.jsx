import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { useSelector } from "react-redux";

const AllProducts = () => {
	const categories = [
		"APPETIZERS",
		"BRUNCH (SAT & SUN /11AM-2PM ONLY)",
		"BURRITOS",
		"CEVICHES",
		"CHICKEN",
		"CHIMICHANGAS",
		"DESSERTS",
		"DRINKS TO GO",
		"ENCHILADAS",
		"FAJITAS",
		"MEAT",
		"MEXICAN COMBINATIONS",
		"MOLCAJETE",
		"PLATOS TIPICOS",
		"QUESADILLAS",
		"SALADS",
		"SEAFOOD",
		"SIDE ORDER",
		"SOUPS",
		"SUPER PARILLADA",
		"VEGGIE'S",
	];

	const { loading, data: menu } = useSelector(state => state.menu);
	console.log(menu);

	return (
		<aside>
			<h1 className='text-2xl font-bold text-orange-600'>ALL Products</h1>
			<hr className='my-3' />

			<div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
				{loading === false &&
					menu &&
					menu?.map(item => <Card key={item._id} item={item} />)}
			</div>
		</aside>
	);
};

export default AllProducts;

{
	/* <div className='flex gap-5 flex-wrap items-center'>
				{categories?.map((item, i) => (
					<Link
						to={`/menu/${item}}`}
						key={item}
						className={`font-bold text-sm ${
							i === 0 &&
							"text-green-600 bg-green-200 rounded-md py-2 px-5 border-l-4 border-green-600"
						}`}
					>
						{item} <span className='text-red-500'>(5)</span>
					</Link>
				))}
			</div>
			<hr className='my-3' /> */
}
