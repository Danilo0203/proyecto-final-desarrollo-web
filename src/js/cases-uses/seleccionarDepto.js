import { cajaDepto, cajasDepto } from './cajas-depto';
export const seleccionarDepto = () => {
	const departamentos = document.querySelectorAll('.deptoGt');
	const reiniciar = document.querySelector('#reiniciar');
	const nombreCaja = cajaDepto();
	departamentos.forEach((depto) => {
		depto.addEventListener('click', () => {
			let nombreMapa = depto.getAttribute('name');
			console.log(`Mapa: ${nombreMapa}`);
			const nombresCajas = nombreCaja();
			if (nombreMapa === nombresCajas) {
				cajasDepto.forEach((caja) => {
					if (caja.innerText === nombreMapa) {
						caja.classList.remove('btn-warning');
						caja.classList.add('btn-success');
					}
				});
				depto.classList.add('success');
			} else {
				console.log('Los nombres no coinciden');
			}
		});
	});
	reiniciar.addEventListener('click', () => {
		departamentos.forEach((depto) => {
			depto.classList.remove('success');
		});
		cajasDepto.forEach((caja) => {
			caja.classList.remove('btn-success');
			caja.classList.remove('btn-warning');
			caja.classList.add('btn-primary');
		});
	});
};
