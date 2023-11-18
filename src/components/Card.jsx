import { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function Card({ item }) {
	const [deleteModal, setDeleteModal] = useState(false);
	const [editModal, setEditModal] = useState(false);




	return (
		<>
			{/*<!-- Component: E-commerce card --> */}
			<div className='overflow-hidden rounded border bg-white text-slate-500 shadow-md shadow-slate-200 max-w-sm w-full'>
				<div className='p-3 flex flex-col justify-between h-full'>
					<header className='flex flex-col gap-2'>
						<h3 className='text-lg font-medium text-slate-700'>{item?.name}</h3>
						{item?.description?.length > 1 && (
							<p>
								<strong>Description:</strong> {item?.description}
							</p>
						)}
						{item?.title && (
							<p>
								<strong>Title:</strong> {item?.title}
							</p>
						)}

						<p className=' text-slate-600'>
							<strong>Price:</strong> {item?.price}
						</p>
					</header>
					<div className='flex gap-2 my-2'>
						<button
							onClick={() => setEditModal(true)}
							className='flex-1 h-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-2 py-1 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600'
						>
							Edit
						</button>
						<button
							onClick={() => setDeleteModal(true)}
							className='flex-2 h-full items-center justify-center gap-2 whitespace-nowrap rounded bg-red-500 px-2 py-1 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-red-600'
						>
							Delete
						</button>
					</div>
				</div>
			</div>
			<DeleteModal
				item={item}
				isOpen={deleteModal}
				setIsOpen={setDeleteModal}
			/>
			<EditModal item={item} isOpen={editModal} setIsOpen={setEditModal} />
		</>
	);
}

{
	/*  <!-- Image --> */
}
{
	/* <figure>
					<img
						src='https://picsum.photos/id/493/800/600'
						alt='card image'
						className='aspect-video w-full'
					/>
				</figure> */
}
{
	/*  <!-- Body--> */
}
