import html from '../index.html?raw';
import { navBar } from './cases-uses/nav-opacity';
export const App = (elementId) => {
	(() => {
		const app = document.querySelector(elementId);
		app.innerHTML = html;
	})();
	navBar();
};
