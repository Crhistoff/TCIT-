import { paddocks, paddockType } from "./data";

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente
// por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
	const clonePaddocks = [...paddocks];
	const paddockTypeIdTotals = clonePaddocks.reduce((acc, curr) => {
		const namePaddockType = paddockType.find(
			({ id }) => id === curr.paddockTypeId
		).name;
		acc[namePaddockType] = (acc[namePaddockType] || 0) + curr.area;
		return acc;
	}, {});

	const sortedDescending = Object.entries(paddockTypeIdTotals).sort(
		(a, b) => b[1] - a[1]
	);

	return sortedDescending.map((value) => value[0]);
}

export default sortPaddockTypeByTotalArea;
