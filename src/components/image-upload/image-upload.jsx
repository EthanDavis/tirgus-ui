import React from 'react';

const fileSelectedHandler = (event) => {
	convertImageToBase64String(event)
};

const convertImageToBase64String = (event) => {
	let file = event.target.files[0];
	let reader = new FileReader();
	reader.onloadend = function () {
		console.log('RESULT', reader.result)
	}
	reader.readAsDataURL(file);
}


const ImageUpload = () => {
	return (
		<div>
			<input type="file" onChange={fileSelectedHandler} />
		</div>
	);
}

export default ImageUpload;