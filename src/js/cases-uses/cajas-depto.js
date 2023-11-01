export const cajasDepto = document.querySelectorAll('.btn-primary');
export const cajaDepto = () => {
	let ultimoNombreDepto = '';
	cajasDepto.forEach((caja) => {
		caja.addEventListener('click', () => {
			cajasDepto.forEach((caja) => {
				caja.classList.remove('btn-warning');
				caja.classList.add('btn-primary');
			});
			ultimoNombreDepto = caja.innerText;
			caja.classList.add('btn-warning');
			caja.classList.remove('btn-primary');
		});
	});
	return () => ultimoNombreDepto;
};
