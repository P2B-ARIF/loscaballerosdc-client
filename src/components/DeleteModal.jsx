import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	AlertDialogCloseButton,
	Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function DeleteModal({ item, isOpen, setIsOpen }) {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleDelete = async data => {
		setIsLoading(true);
		try {
			const serverUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;

			const res = await axios.delete(`${serverUrl}/menu/delete/${data?._id}`, {
				headers: {
					Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
					"Content-Type": "application/json",
				},
			});

			if (res.status === 201) {
				toast.error(res.data.error);
				localStorage.removeItem("token");
				navigate("/dashboard/login");
				return;
			}

			if (res.status === 200) {
				toast.success("Menu deleted successfully");
				setIsLoading(false);
				setTimeout(() => {
					window.location.reload();
				}, 500);
			}
		} catch (error) {
			toast.error(error.message || "Something wrong");
			setIsLoading(false);
		}
	};
	return (
		<>
			<AlertDialog
				motionPreset='slideInBottom'
				onClose={() => setIsOpen(false)}
				isOpen={isOpen}
				isCentered
			>
				<AlertDialogOverlay />

				<AlertDialogContent>
					<AlertDialogHeader>Are You Sure..!</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						<div className='flex flex-col gap-2'>
							<h3 className='text-xl font-medium text-slate-700 mb-1'>
								{item?.name}
							</h3>
							{item?.description?.length > 1 && (
								<p>
									<strong>Description:</strong> {item?.description}
								</p>
							)}

							<p className=' text-slate-600'>
								<strong>Price:</strong> {item?.price}
							</p>
						</div>
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button onClick={() => setIsOpen(false)} size={"sm"}>
							No
						</Button>
						<Button
							onClick={() => handleDelete(item)}
							colorScheme='red'
							ml={3}
							size={"sm"}
							isLoading={isLoading}
						>
							Yes
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}

export default DeleteModal;
