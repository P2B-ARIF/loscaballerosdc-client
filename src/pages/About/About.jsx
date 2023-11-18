import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import image from "./../../assets/img1.jpeg";

const About = () => {
	return (
		<section>
			<div
				className='h-[50vh] flex items-center relative '
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				{/* Overlay with light gray color */}
				<div className='absolute inset-0 bg-gray-700 opacity-70'></div>

				<p className='absolute whitespace-nowrap top-[50%] left-[50%] -translate-x-[50%] translate-y-[50%] text-6xl md:text-7xl text-white font-satisfy z-20'>
					About Us.
				</p>
			</div>

			{/* <button className='bg-green-700 p-3 rounded-lg fixed top-[47%] -right-1 z-10 flex gap-1 items-center text-white'>
				<FaCartPlus />0
			</button> */}

			<div className='font-poppins text-lg  p-5 bg-yellow-50'>
				<p className='container mx-auto text-center'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste veniam,
					aliquid quaerat similique in tempore totam tenetur consequatur
					voluptatibus itaque quas ut error laborum ratione? Voluptate similique
					doloribus accusantium nobis nostrum asperiores, debitis ullam atque
					reiciendis porro ipsum, cum esse obcaecati recusandae consectetur
					natus id corrupti dignissimos consequatur non minus, cupiditate veniam
					dolor? Animi, quos enim blanditiis at eveniet minus deserunt quibusdam
					facilis corporis dolorum. Veritatis possimus exercitationem asperiores
					minima sunt veniam deserunt pariatur soluta recusandae accusamus
					aliquid distinctio, error sequi saepe cupiditate unde doloribus
					consequatur magni totam, cum expedita quibusdam autem. Quae fugit
					doloremque commodi dicta neque molestias voluptate.
				</p>
			</div>

			<br />
			<br />
			<br />
			<br />
			{/* <div className='h-[100vh] w-full'>
				<img src={image} alt='' className='h-full w-full object-cover' />
			</div> */}
		</section>
	);
};

export default About;
