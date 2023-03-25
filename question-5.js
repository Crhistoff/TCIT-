import { paddocks } from "./data";

// 5 Arreglo ordenado decrecientemente con los m2
//totales de cada campo que tengan más de 2 hectáreas en Paltos
function biggestAvocadoFarms() {
	const paddockTypeSearched = { id: 1, name: "PALTOS" };
	const minimumHectares = 20000;
	const clonePaddocks = [...paddocks];
	const farmIdTotals = clonePaddocks.reduce((acc, curr) => {
		if (curr.paddockTypeId === paddockTypeSearched.id) {
			acc[curr.farmId] = (acc[curr.farmId] || 0) + curr.area;
		}
		return acc;
	}, {});

	return Object.entries(farmIdTotals)
		.map((value) => value[1])
		.filter((total) => total > minimumHectares)
		.sort((a, b) => b - a);
}

export default biggestAvocadoFarms;
