import React from "react";

const MapContainer = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "0",
				paddingBottom: "75%",
				position: "relative",
			}}
		>
			<iframe
				title='Google Maps'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0155531953133!2d-77.45188922364822!3d38.900759646505165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b647714a3123e5%3A0xe531807e86398f7!2sLos%20carnales%20tex%20mex%20grill!5e0!3m2!1sen!2sbd!4v1700085430724!5m2!1sen!2sbd'
				width='100%'
				height='100%'
				style={{ position: "absolute", top: "0", left: "0", border: 0 }}
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	);
};

export default MapContainer;
