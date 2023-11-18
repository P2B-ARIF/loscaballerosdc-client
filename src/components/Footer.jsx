import phone from "../assets/phone.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import image from "./../assets/img2.jpeg";

const Footer = () => {
	return (
		<>
			<section
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className='bg-slate-100 h-[60vh] flex flex-col justify-center relative'
			>
				<div className='absolute inset-0 bg-gray-700 opacity-70'></div>

				<div className='container mx-auto flex items-center justify-center text-center relative z-40 text-white'>
					<div className='m-10 flex flex-col justify-center text-center'>
						<img src={phone} alt='' className='w-[50px] mx-auto' />
						<br />
						<h3 className='text-4xl font-satisfy'>
							Call for all your Resewations
						</h3>{" "}
						<br />
						<a href='tel:+91 9283746574' className='text-4xl font-medium'>
							(202) 909-7383
						</a>
						<br />
						<br />
						<p>Follow Us</p>
						<div className='flex gap-3 mx-auto'>
							<FaFacebookSquare className='w-[50px] h-[50px] p-3 bg-slate-200 text-secondary-color mt-5' />
							<FaInstagramSquare className='w-[50px] h-[50px] p-3 bg-slate-200 text-secondary-color mt-5' />
						</div>
					</div>
				</div>
			</section>

			<footer className='py-8 bg-black text-white text-center'>
				Copyright &copy; 2023 | Powered by los carnales tex mex grill
			</footer>
		</>
	);
};

export default Footer;
