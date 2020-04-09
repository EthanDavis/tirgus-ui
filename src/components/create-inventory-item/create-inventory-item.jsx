import React from 'react';
import Button from '../button/button';
import ImageUpload from '../image-upload/image-upload';

const CreateInventoryItem = () => {
	return (
		<form>
			<div className="htmlForm-row">
				<div className="htmlForm-group col-md-6">
					<label htmlFor="name-input">Name</label>
					<input type="input" className="htmlForm-control" id="name-input" placeholder="Name" />
				</div>
				<div className="htmlForm-group col-md-6">
					<label htmlFor="price-input">Price</label>
					<input type="input" className="htmlForm-control" id="price-input" placeholder="Price" />
				</div>
			</div>
			<div className="form-group">
				<ImageUpload />
			</div>
			<Button type="button" key={`btn-${item.id}`}
				buttonStyle="btn--primary--solid"
				buttonSize="btn--medium">Submit</Button>
		</form>
	);
}

export default CreateInventoryItem;