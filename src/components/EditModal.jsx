import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Input,
	Textarea,
	Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchingMenu } from "../app/features/menuSlice";

function EditModal({ item, isOpen, setIsOpen }) {
	const categories = [
		{ href: "/dashboard/appetizers", category: "APPETIZERS" },
		{ href: "/dashboard/salads", category: "SALADS" },
		{
			href: "/dashboard/burritos-y-enchiladas",
			category: "BURRITOS Y ENCHILADAS",
		},
		{
			href: "/dashboard/tacos-chimichangas-flautas",
			category: "TACOS, CHIMICHANGAS, FLAUTAS",
		},
		{
			href: "/dashboard/house-combinations",
			category: "HOUSE COMBINATIONS",
		},
		{
			href: "/dashboard/vegetarian's-favorites",
			category: "VEGETARIAN'S FAVORITES",
		},
		{
			href: "/dashboard/house-specialties-fajitas-y-parrillada",
			category: "HOUSE SPECIALTIES FAJITAS Y PARRILLADA",
		},
		{ href: "/dashboard/seafood", category: "SEAFOOD" },
		{
			href: "/dashboard/chicken-and-meats",
			category: "CHICKEN AND MEATS",
		},
		{ href: "/dashboard/drinks", category: "DRINKS" },
		{ href: "/dashboard/house-wine", category: "HOUSE WINE" },
		{ href: "/dashboard/happy-hour", category: "HAPPY HOUR" },
		{ href: "/dashboard/soft-drinks", category: "SOFT DRINKS" },
	];

	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleUpdate = async e => {
		e.preventDefault();
		setIsLoading(true);

		const name = e.target.name.value;
		const description = e.target.description.value;
		const title = e.target.title.value;
		const category = e.target.category.value;
		const price = e.target.price.value;

		if (name?.length > 0 && price.length > 0 && category.length > 0) {
			try {
				const serverUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;
				const res = await axios.put(
					`${serverUrl}/menu/update/${item?._id}`,
					{ name, description, category, price, title },
					{
						headers: {
							Authorization: `Bearer ${JSON.parse(
								localStorage.getItem("token"),
							)}`,
							"Content-Type": "application/json",
						},
					},
				);

				console.log(res);

				if (res.status === 201) {
					toast.error(res.data.error);
					localStorage.removeItem("token");
					navigate("/dashboard/login");
					setIsLoading(false);
					return;
				}

				if (res.status === 200) {
					toast.success("Menu created successfully");
					setIsLoading(false);
					dispatch(fetchingMenu());
					setIsOpen(false);
					// setTimeout(() => {
					// 	window.location.reload();
					// }, 500);
				}
			} catch (error) {
				toast.error(error.message);
			}
		}
	};

	return (
		<>
			<Modal
				closeOnOverlayClick={false}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create Menu Item</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form onSubmit={handleUpdate} className='flex flex-col gap-3 pb-4'>
							<Select
								// onChange={e => setCate(e.target.value)}
								name='category'
								isRequired
								defaultValue={item?.category ? item?.category : ""}
								variant='outline'
								placeholder='Select Category'
							>
								{categories?.map(category => (
									<option key={category.category} value={category.category}>
										{category.category}
									</option>
								))}
							</Select>

							<Input
								isRequired
								defaultValue={item?.name}
								variant='outline'
								placeholder='Name'
								name='name'
							/>
							{item?.title && (
								<Textarea
									defaultValue={item?.title}
									variant='outline'
									placeholder='Title'
									name='title'
								/>
							)}
							<Textarea
								defaultValue={item?.description}
								variant='outline'
								placeholder='Description'
								name='description'
							/>
							<Textarea
								defaultValue={item?.price}
								name='price'
								isRequired
								variant='outline'
								placeholder='Price'
							/>
							<div className='flex justify-end mt-2'>
								<Button
									isLoading={isLoading}
									type='submit'
									colorScheme='blue'
									mr={3}
									size={"sm"}
								>
									Save Changes
								</Button>
								<Button onClick={() => setIsOpen(false)} size={"sm"}>
									Cancel
								</Button>
							</div>
						</form>
					</ModalBody>
					{/* 
					<ModalFooter>
						
					</ModalFooter> */}
				</ModalContent>
			</Modal>
		</>
	);
}

export default EditModal;
