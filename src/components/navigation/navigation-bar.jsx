/* eslint-disable react/prop-types */
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { ItemsChartContext } from "../../context/items-chart-context";
import './navigation-bar.less';

const NavigationBar = () => {

	const { chartState, dispatch } = useContext(ItemsChartContext);
	
	return (
		<nav className="navbar navbar-light navigation-bar sticky-top">
			<Link className="navbar-brand" to="/">Ashley&apos;s<svg height="25pt" viewBox="0 -20 512.00067 512" width="25pt" xmlns="http://www.w3.org/2000/svg"><path d="m501.992188 34c0 13.253906-10.746094 24-24 24-13.253907 0-24-10.746094-24-24s10.746093-24 24-24c13.253906 0 24 10.746094 24 24zm0 0" fill="#c9f3ff" /><path d="m501.984375 135.183594c0 13.257812-10.742187 24-24 24-13.253906 0-23.996094-10.742188-23.996094-24 0-13.253906 10.742188-23.996094 23.996094-23.996094 13.257813 0 24 10.742188 24 23.996094zm0 0" fill="#c9f3ff" /><path d="m447.992188 255.992188c0 106.039062-85.960938 191.996093-191.996094 191.996093s-191.996094-85.957031-191.996094-191.996093c0-106.035157 85.960938-191.996094 191.996094-191.996094s191.996094 85.960937 191.996094 191.996094zm0 0" fill="#36d28f" /><path d="m238.722656 246.511719c2.535156 0 5.070313-.960938 7.019532-2.878907l.207031-.203124c3.929687-3.878907 3.976562-10.210938.097656-14.144532-3.875-3.933594-10.207031-3.976562-14.140625-.101562l-.207031.207031c-3.933594 3.875-3.976563 10.207031-.101563 14.140625 1.957032 1.984375 4.539063 2.980469 7.125 2.980469zm0 0" /><path d="m507.75 118.753906c-4.386719-7.949218-11.609375-13.714844-20.335938-16.234375-8.722656-2.515625-17.910156-1.488281-25.859374 2.902344-7.949219 4.386719-13.714844 11.609375-16.234376 20.335937-1.566406 5.417969-1.757812 11.015626-.628906 16.382813l-16.09375 8.886719c-6.699218-11-14.375-21.230469-22.890625-30.601563l56.386719-56.386719c4.75 2.523438 10.160156 3.960938 15.898438 3.960938 18.75 0 34-15.253906 34-34s-15.25-34-34-34c-18.746094 0-33.996094 15.253906-33.996094 34 0 5.742188 1.433594 11.148438 3.957031 15.898438l-56.40625 56.40625c-49.386719-44.578126-119.753906-63.945313-188.582031-45.21875-52.0625 14.167968-95.492188 47.757812-122.289063 94.589843-26.796875 46.828125-33.753906 101.289063-19.589843 153.351563 3.546874 13.035156 8.308593 25.421875 14.113281 37.078125l-70.03125 38.660156c-4.832031 2.667969-6.589844 8.75-3.921875 13.585937 1.824218 3.304688 5.242187 5.167969 8.765625 5.167969 1.632812 0 3.292969-.402343 4.824219-1.246093l70.160156-38.730469c6.308594 10.023437 13.449218 19.382812 21.292968 28.015625l-63.359374 63.359375c-3.90625 3.90625-3.90625 10.238281 0 14.144531 1.953124 1.953125 4.511718 2.925781 7.070312 2.925781s5.121094-.972656 7.070312-2.925781l63.386719-63.386719c36.695313 33.125 84.96875 52.335938 135.59375 52.335938 17.503907 0 35.296875-2.296875 52.980469-7.109375 107.472656-29.242188 171.117188-140.46875 141.875-247.941406-3.273438-12.023438-7.578125-23.492188-12.78125-34.351563l16.230469-8.957031c3.941406 3.816406 8.78125 6.632812 14.203125 8.199218 3.125.902344 6.308594 1.347657 9.476562 1.347657 5.667969 0 11.28125-1.433594 16.382813-4.25 7.949219-4.386719 13.714843-11.609375 16.234375-20.335938 2.519531-8.722656 1.488281-17.90625-2.902344-25.859375zm-321.5 305.25c-1.648438-10.613281-2.488281-21.4375-2.488281-32.246094 0-42.949218 12.976562-84.167968 37.527343-119.207031 3.167969-4.523437 2.070313-10.757812-2.453124-13.929687-4.523438-3.167969-10.757813-2.070313-13.925782 2.453125-26.917968 38.417969-41.148437 83.609375-41.148437 130.683593 0 7.21875.351562 14.441407 1.027343 21.621094-13.40625-7.769531-25.832031-17.234375-36.921874-28.195312 1.582031-65.566406 26.449218-124.824219 66.769531-169.910156 1.871093-1.042969 3.390625-2.667969 4.28125-4.675782 46.597656-49.636718 112.417969-80.949218 186.273437-82.734375 10.871094 10.925781 20.421875 23.304688 28.320313 36.9375-7.21875-.683593-14.488281-1.039062-21.753907-1.039062-45.542968 0-89.507812 13.390625-127.144531 38.71875-4.582031 3.082031-5.792969 9.296875-2.710937 13.878906 1.929687 2.867187 5.089844 4.414063 8.304687 4.414063 1.921875 0 3.859375-.550782 5.574219-1.703126 34.324219-23.101562 74.429688-35.308593 115.976562-35.308593 10.851563 0 21.714844.84375 32.363282 2.503906 2.921875 7.058594 5.429687 14.382813 7.488281 21.945313 1.554687 5.707031 2.804687 11.425781 3.785156 17.140624-14.179687-3.710937-28.808593-5.59375-43.632812-5.59375-94.839844 0-171.996094 77.15625-171.996094 171.996094 0 14.820313 1.878906 29.4375 5.585937 43.613282-13.484374-2.324219-26.597656-6.15625-39.101562-11.363282zm-105.863281-120.226562c-.804688-2.957032-1.53125-5.917969-2.1875-8.886719 13.070312-8.429687 27.363281-14.789063 42.535156-18.917969 4.261719-1.160156 8.570313-2.125 12.90625-2.910156-13.0625 28.378906-21.363281 58.871094-24.472656 90.457031-12.84375-17.496093-22.753907-37.582031-28.78125-59.742187zm-5.011719-70.882813c9.867188-4.417969 20.160156-8.097656 30.65625-10.957031 20.945312-5.699219 42.261719-8.082031 63.601562-7.152344-9.269531 11.597656-17.578124 23.816406-24.851562 36.570313-9.855469.925781-19.6875 2.703125-29.296875 5.320312-14.320313 3.898438-27.953125 9.5625-40.671875 16.875-1.347656-13.605469-1.15625-27.226562.5625-40.65625zm402.617188-212.894531c7.71875 0 14 6.28125 14 14s-6.28125 14-14 14-14-6.28125-14-14 6.28125-14 14-14zm-269.777344 60.382812c15.9375-4.335937 31.957031-6.40625 47.734375-6.40625 39.125 0 76.691406 12.738282 107.457031 35.199219-16.484375 1.628907-32.667969 4.671875-48.410156 9.066407-36.457032-18.492188-76.105469-30.320313-116.527344-34.910157 3.210938-1.0625 6.457031-2.054687 9.746094-2.949219zm-48.023438 20.785157c43.597656-.035157 87.136719 9.003906 127.324219 26.285156-15.863281 6.253906-31.136719 13.960937-45.667969 23.019531-41.613281-12.457031-85.441406-15.125-128.203125-7.921875 13.078125-16.484375 28.800781-30.433593 46.546875-41.382812zm-62.527344 65.105469c40.382813-9.9375 82.332032-10.207032 122.542969-.871094-10.332031 7.859375-20.203125 16.457031-29.519531 25.796875-1.582031 1.585937-3.140625 3.1875-4.679688 4.804687-28.558593-3.210937-57.203124-.988281-85.226562 6.636719-7.027344 1.914063-13.96875 4.171875-20.773438 6.738281 3.964844-14.882812 9.863282-29.359375 17.65625-43.105468zm149.183594 271.488281c-4.703125-14.824219-7.085937-30.285157-7.085937-46.003907 0-83.8125 68.1875-152 151.996093-152 15.722657 0 31.1875 2.386719 46.011719 7.089844.640625 12.695313-.058593 25.277344-2.015625 37.558594-13.886718-5.679688-28.90625-8.648438-43.996094-8.648438-63.960937 0-115.996093 52.039063-115.996093 116 0 15.316407 2.910156 30.074219 8.644531 44-12.609375 2.003907-25.183594 2.636719-37.558594 2.003907zm179.023438-116.675781c-2.878906-7.53125-6.070313-14.929688-9.566406-22.171876 5.160156 1.359376 10.199218 3.15625 15.105468 5.390626-1.578125 5.691406-3.429687 11.289062-5.539062 16.78125zm-99.265625 56.394531c-3.609375-13.273438-8.777344-26.011719-15.355469-37.953125 6.859375-10.535156 15.722656-19.640625 26.050781-26.78125 10.621094 17.089844 18.699219 35.644531 24.039063 55.28125 2.847656 10.457031 4.882812 21.15625 6.078125 31.855468-10.613281 8.242188-22.238281 15.371094-34.753907 21.175782-.144531-14.65625-2.164062-29.265625-6.058593-43.578125zm-22.273438 53.96875c-5.683593-12.46875-8.574219-25.800781-8.574219-39.691407 0-10.15625 1.59375-19.949218 4.53125-29.144531 2.789063 6.511719 5.144532 13.230469 7.015626 20.117188 4.128906 15.175781 5.886718 30.714843 5.238281 46.253906-2.703125.878906-5.441407 1.699219-8.210938 2.464844zm81.003907-47.476563c-1.234376-7.125-2.796876-14.210937-4.695313-21.195312-5.757813-21.152344-14.414063-41.171875-25.769531-59.644532 11.363281-4.746093 23.824218-7.375 36.886718-7.375.144532 0 .289063.007813.433594.007813 8.847656 16.179687 16.011719 33.371094 21.335938 51.183594-7.761719 13.441406-17.226563 25.902343-28.191406 37.023437zm106.097656-244.90625c-1.035156 3.59375-3.410156 6.566406-6.683594 8.375s-7.054688 2.230469-10.648438 1.195313c-3.589843-1.039063-6.566406-3.410157-8.371093-6.683594-1.808594-3.273437-2.230469-7.058594-1.195313-10.648437 1.035156-3.59375 3.410156-6.566407 6.683594-8.375 2.101562-1.160157 4.410156-1.75 6.746094-1.75 1.304687 0 2.617187.183593 3.902344.554687 3.59375 1.039063 6.566406 3.414063 8.375 6.6875 1.808593 3.273437 2.230468 7.054687 1.191406 10.644531zm0 0" /></svg></Link>
			<NavLink className="nav-item nav-link nav-link-element" to="/about">
				About
			</NavLink>
			<NavLink className="nav-item nav-link chart-icon" to="/chart">
				<div>
					<FontAwesomeIcon icon={faShoppingCart} size="lg" />
					<span className="navbar-chart-count">{chartState.length}</span>
				</div>
			</NavLink>
		</nav>
	);
}

export default NavigationBar;