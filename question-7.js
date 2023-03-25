import { paddocks, paddockManagers, farms } from "./data";

// 7 Objeto en el cual las claves sean el nombre
// del administrador y el valor un arreglo con los nombres
//de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
	const clonePaddocks = [...paddocks];
	return clonePaddocks.reduce((acc, curr) => {
		const { name } = paddockManagers.find(
			({ id }) => id === curr.paddockManagerId
		);
		const result = [
			...(acc[name] || []),
			farms.find(({ id }) => id === curr.farmId).name,
		];

		acc[name] = [...new Set(result)].sort((a, b) => a.localeCompare(b));
		return acc;
	}, {});
}
export default farmManagerPaddocks;
