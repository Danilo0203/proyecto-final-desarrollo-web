import * as bootstrap from 'bootstrap';
import html from '../depto.html?raw';
import { navBar } from './cases-uses/nav-opacity';
import { seleccionarDepto } from './cases-uses/seleccionarDepto';

export const Depto = (elementId) => {
	(() => {
		const app = document.querySelector(elementId);
		app.innerHTML = html;
	})();
};
navBar();
seleccionarDepto();
