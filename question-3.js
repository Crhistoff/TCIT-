import { paddocks, paddockManagers } from "./data";

// 3 Arreglo con los nombres de los administradores,
// ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
	const clonePaddocks = [...paddocks];
	const managersIdTotals = clonePaddocks.reduce((acc, curr) => {
		const nameManager = paddockManagers.find(
			({ id }) => id === curr.paddockManagerId
		).name;
		acc[nameManager] = (acc[nameManager] || 0) + curr.area;
		return acc;
	}, {});

	const sortedDescending = Object.entries(managersIdTotals).sort(
		(a, b) => b[1] - a[1]
	);

	return sortedDescending.map((item) => item[0]);
}

export default sortFarmManagerByAdminArea;
