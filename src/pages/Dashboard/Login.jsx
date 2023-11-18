import { useEffect, useState } from "react";
import image from "./../../assets/img1.jpeg";
import logo from "./../../assets/logo.png";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
	const [showPass, setShowPass] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	let form = location.state?.from?.pathname || "/";

	useEffect(() => {
		if (localStorage.getItem("token")) {
			navigate("/dashboard");
		}
	}, []);

	const handleLogin = async e => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value || e.target.text.value;

		try {
			const response = await axios.post("http://localhost:5000/auth/login", {
				email,
				password,
			});

			if (response.data.token) {
				navigate(form, { replace: true });
			}

			localStorage.setItem("token", JSON.stringify(response.data.token));
		} catch (error) {
			console.error("Error adding item:", error);
		}
	};

	return (
		<div
			style={{
				backgroundImage: `url('${image}')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className='flex items-center justify-center h-screen'
		>
			<div className='absolute inset-0 bg-gray-700 opacity-70'></div>

			{/*<!-- Component: Card with form --> */}
			<form
				onSubmit={handleLogin}
				className='relative z-20 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-500 md:w-[400px] w-[320px]'
			>
				{/*  <!-- Body--> */}
				<div className='p-6'>
					<header className='mb-4 text-center'>
						<img src={logo} alt='' className='max-w-[150px] mx-auto' />
						<br />
						<h3 className='text-xl font-bold text-slate-500'>Admin Login</h3>
					</header>
					<div className='flex flex-col space-y-8'>
						{/*      <!-- Input field --> */}
						<div className='relative my-6'>
							<input
								id='id-b03'
								type='email'
								name='email'
								placeholder='your name'
								className='peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400'
							/>
							<label
								htmlFor='id-b03'
								className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
							>
								Your email
							</label>
							<small className='absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500'>
								<span>Type your email address</span>
							</small>
						</div>
						{/*      <!-- Input field --> */}
						<div className='relative my-6'>
							<input
								id='id-b13'
								type={showPass ? "text" : "password"}
								name='password'
								placeholder='your password'
								className='peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400'
							/>
							<label
								htmlFor='id-b13'
								className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
							>
								Your password
							</label>
							{showPass ? (
								<AiOutlineEye
									onClick={() => setShowPass(false)}
									className='absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed'
								/>
							) : (
								<AiOutlineEyeInvisible
									onClick={() => setShowPass(true)}
									className='absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed'
								/>
							)}
							{/* <small className='absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500'>
								<span>Input field with trailing icon</span>
							</small> */}
						</div>
					</div>
				</div>
				{/*  <!-- Action base sized basic button --> */}
				<div className='flex justify-end p-6 '>
					<button
						type='submit'
						className='inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none'
					>
						<span>Log in</span>
					</button>
				</div>
			</form>
			{/*<!-- End Card with form --> */}
		</div>
	);
}
