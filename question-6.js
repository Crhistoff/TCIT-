import { paddocks, paddockManagers } from "./data";

// 6 Arreglo con nombres de los administradores
//de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre,
//que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
	const farmSearched = { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" };
	const paddockSearched = { id: 3, name: "CEREZAS" };
	const minimumArea = 1000;
	const clonePaddocks = [...paddocks];
	return clonePaddocks
		.filter(
			(paddock) =>
				paddock.farmId === farmSearched.id &&
				paddock.paddockTypeId === paddockSearched.id &&
				paddock.area > minimumArea
		)
		.map(
			(value) =>
				paddockManagers.find((manager) => manager.id === value.paddockManagerId)
					.name
		)
		.sort((a, b) => a.localeCompare(b));
}
export default biggestCherriesManagers;
