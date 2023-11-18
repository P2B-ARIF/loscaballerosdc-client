import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import image from "./../../assets/img3.jpeg";
import MapContainer from "../../components/MapContainer";

const ContactUs = () => {
	return (
		<section>
			<div
				className='h-[50vh] flex items-center relative'
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				{/* Overlay with light gray color */}
				<div className='absolute inset-0 bg-gray-700 opacity-70'></div>

				<div className='container mt-20 absolute top-[50%] -translate-y-[50%]'>
					<p className='text-5xl text-white font-satisfy relative z-20 text-center'>
						Contact us
					</p>
					<p className='mt-2 text-5xl md:text-6xl text-white text-center font-satisfy relative z-20'>
						(202) 909-7383
					</p>
				</div>
			</div>

			{/* <button className='bg-green-700 p-3 rounded-lg fixed top-[47%] -right-1 z-10 flex gap-1 items-center text-white'>
				<FaCartPlus />0
			</button> */}

			<aside className='grid grid-cols-1 md:grid-cols-2 gap-5 bg-yellow-50 p-6 md:p-16'>
				<div>
					<MapContainer />
				</div>
				<div className='p-5 flex items-center mx-auto bg-slate-100'>
					<ul>
						<li className='grid grid-cols-3 gap-3 text-center my-4 mx-1'>
							<label className='border-b-[1px] border-slate-300'>MONDAY</label>
							<label>11:00AM</label>
							<label>10:00PM</label>
						</li>
						<li className='grid grid-cols-3 gap-3 text-center my-4 mx-1'>
							<label className='border-b-[1px] border-slate-300'>TUESDAY</label>
							<label>11:00AM</label>
							<label>10:00PM</label>
						</li>
						<li className='grid grid-cols-3 gap-3 text-center my-4 mx-1'>
							<label className='border-b-[1px] border-slate-300 whitespace-nowrap'>
								WEDNESDAY
							</label>
							<label>11:00AM</label>
							<label>10:00PM</label>
						</li>
						<li className='grid grid-cols-3 gap-3 text-center my-4 mx-1'>
							<label className='border-b-[1px] border-slate-300'>
								THURSDAY
							</label>
							<label>11:00AM</label>
							<label>10:00PM</label>
						</li>
						<li className='grid grid-cols-3 gap-3 text-center my-4 mx-1'>
							<label className='border-b-[1px] border-slate-300'>FRIDAY</label>
							<label>11:00AM</label>
							<label>10:00PM</label>
						</li>
						<li className='grid grid-cols-3 gap-3 text-center my-4 mx-1'>
							<label className='border-b-[1px] border-slate-300'>
								SATURDAY
							</label>
							<label>11:00AM</label>
							<label>10:00PM</label>
						</li>
						<li className='grid grid-cols-3 gap-3 text-center my-4 mx-1'>
							<label className='border-b-[1px] border-slate-300'>SUNDAY</label>
							<label>11:00AM</label>
							<label>10:00PM</label>
						</li>
					</ul>
				</div>
			</aside>

			<section className='bg-secondary-color py-20'>
				<div className='container mx-auto md:flex justify-between items-center gap-5'>
					<p className='flex-1 text-2xl font-medium px-5 text-center'>
						308 Pennsylvania Ave SE, Washington, DC
					</p>
					<form className='flex-1 bg-orange-400 p-10 m-5'>
						<h3 className='text-xl mb-6'>For Online Inquiries</h3>

						<input
							className='w-full my-2 py-2 px-5 border-[1px] border-gray-300'
							type='text'
							name='name'
							placeholder='Name'
						/>
						<input
							className='w-full my-2 py-2 px-5 border-[1px] border-gray-300'
							type='email'
							name='email'
							placeholder='Email'
						/>
						<input
							className='w-full my-2 py-2 px-5 border-[1px] border-gray-300'
							type='number'
							name='contact'
							placeholder='Contact No.'
						/>
						<textarea
							className='w-full my-2 py-2 px-5 border-[1px] border-gray-300'
							name='message'
							id=''
							cols='100%'
							rows='5'
							placeholder='Message'
						></textarea>
						<button className='text-sm bg-primary-color hover:bg-white hover:text-primary-color transition-all ease-linear duration-300  text-white py-4 px-8 rounded-full font-bold'>
							SEND MESSAGE
						</button>
					</form>
				</div>
			</section>

			<div className='bg-yellow-50 py-10 px-5'>
				<div className='container mx-auto'>
					<h1 className='font-berkshire-swash text-xl'>Leave a Reply</h1>
					<p>
						Your email address will not be published. Required fields are marked
						*
					</p>
					<br />
					<form>
						<label htmlFor='message'>Comment *</label>
						<textarea
							className='w-full my-2 py-2 px-5 border-[1px] border-gray-300'
							name='message'
							id='message'
							cols='100%'
							rows='5'
							placeholder='Message'
						></textarea>

						<div className='md:flex items-center justify-between gap-5'>
							<input
								className='w-full my-2 py-2 px-5 border-[1px] border-gray-300'
								type='text'
								name='name'
								placeholder='Name'
							/>
							<input
								className='w-full my-2 py-2 px-5 border-[1px] border-gray-300'
								type='email'
								name='email'
								placeholder='Email'
							/>
							<input
								className='w-full my-2 py-2 px-5 border-[1px] border-gray-300'
								type='number'
								name='contact'
								placeholder='Contact No.'
							/>
						</div>
						<br />

						<div className='flex gap-2 items-start'>
							<input type='checkbox' name='saveInfo' id='saveInfo' className="mt-1" />
							<label htmlFor='saveInfo'>
								Save my name, email, and website in this browser for the next
								time I comment.
							</label>
						</div>
						<br />
						<button className='text-sm bg-orange-400 hover:bg-orange-500 text-white py-3 px-6 rounded-md font-bold'>
							POST COMMENT
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
