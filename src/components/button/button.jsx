/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import "./button.less"
const STYLES = [
	"btn--primary--solid",
	"btn--warning--solid",
	"btn--danger--solid",
	"btn--success--solid",
	"btn--primary--outline",
	"btn--warning--outline",
	"btn--danger--outline",
	"btn--success--outline",
];

const SIZE = [
	"btn--medium",
	"btn--large"
];


const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
	return (
		<button onClick={onClick} type={type} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
			{children}
		</button>
	);
}

export default Button;