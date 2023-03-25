import { paddocks, paddockManagers, farms } from "./data";

// 4 Objeto en que las claves sean los nombres de los campos
// y los valores un arreglo con los ruts de sus administradores
// ordenados alfabéticamente por nombre.
function farmManagerNames() {
	const clonePaddocks = [...paddocks];
	return clonePaddocks.reduce((acc, curr) => {
		const nameFarm = farms.find(({ id }) => id === curr.farmId).name;

		let taxesPerFarm = (acc[nameFarm] = [
			...(acc[nameFarm] || []),
			paddockManagers.find(({ id }) => curr.paddockManagerId === id).taxNumber,
		]);
		acc[nameFarm] = [...new Set(taxesPerFarm)];
		return acc;
	}, {});
}

export default farmManagerNames;
