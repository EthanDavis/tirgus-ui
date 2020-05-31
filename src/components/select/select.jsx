import React from 'react';
import { PropTypes } from 'prop-types';


const buildOptions = (selectableValues, optionsText) => {
	var options = [];
	for (let i = 0; i < selectableValues.length; i++) {
		let optionsTextAndValue = `${optionsText} ${selectableValues[i]}`;
		options.push(<option key={i} value={selectableValues[i]}>{optionsTextAndValue}</option>)
	}
	return options;
}

const Select = ({ onChange, value, selectableValues, optionsText }) => {
	return (
		<select value={value} onChange={onChange}>
			{
				buildOptions(selectableValues, optionsText)
			}
		</select>
	);
}

Select.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	]),
	selectableValues: PropTypes.array,
	optionsText: PropTypes.string
}

export default Select;