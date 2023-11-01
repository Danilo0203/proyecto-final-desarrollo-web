import html from '../index.html?raw';
import { navBar } from './cases-uses/nav-opacity';
import { seleccionarDepto } from './cases-uses/seleccionarDepto';

export const App = (elementId) => {
	(() => {
		const app = document.querySelector(elementId);
		app.innerHTML = html;
	})();
	navBar();
};
