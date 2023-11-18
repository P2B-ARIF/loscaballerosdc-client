import image from "./../assets/img1.jpeg";

const Header = () => {
	return (
		<header
			className='h-[100vh] flex items-center justify-center w-full text-center relative'
			style={{
				backgroundImage: `url('${image}')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className='absolute inset-0 bg-gray-700 opacity-50'></div>

			<div className='relative z-20 text-white'>
				{/* <img src={headerSymbol} alt='' className="bg-transparent"/> */}
				<p className='text-9xl font-bold font-satisfy my-5'>Los carnales.</p>
				<h4 className='text-4xl font-satisfy my-5'>Tex Mex Grill</h4>
				<div className='flex items-center justify-center gap-2 md:gap-5 text-lg'>
					<label className='w-[100px] md:w-[200px] h-[1px] bg-white'></label>
					<p>Good Food | Good Margaritas</p>
					<label className='w-[100px] md:w-[200px] h-[1px] bg-white'></label>
				</div>
			</div>
		</header>
	);
};

export default Header;
