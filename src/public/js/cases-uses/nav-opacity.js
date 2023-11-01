export const navBar = () => {
	window.addEventListener('scroll', () => {
		let navbar = document.getElementById('navBar');
		let scrolled = window.scrollY;
		if (scrolled > 50) {
			navbar.style.opacity = '0.8';
		} else {
			navbar.style.opacity = '1';
		}
	});
};
