import { paddocks, paddockManagers } from "./data";

// 9 Agregar nuevo administrador con datos ficticios a
// "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES
/// con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este
// nuevo administrador
// Luego devolver el lugar que ocupa este nuevo administrador en el
// ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas
// anteriores al correr la solución
function newManagerRanking() {
	let paddocksClone = [...paddocks];
	let managersClone = [...paddockManagers];
	let newManager = {
		id: 7,
		taxNumber: "123456789",
		name: "CARLOS ECHEVARRIA MESIAS",
	};
	let newPaddock = {
		paddockManagerId: 7,
		farmId: 1,
		paddockTypeId: 4,
		harvestYear: 2017,
		area: 900,
	};
	managersClone.push(newManager);
	paddocksClone.push(newPaddock);

	const managersIdTotals = paddocksClone.reduce((acc, curr) => {
		acc[curr.paddockManagerId] = (acc[curr.paddockManagerId] || 0) + curr.area;
		return acc;
	}, {});

	const sortedDescending = Object.entries(managersIdTotals).sort(
		(a, b) => b[1] - a[1]
	);

	const newRanking = sortedDescending.map(
		(value) => managersClone.find((manager) => manager.id == [value[0]]).name
	);

	return Object.entries(newRanking).findIndex(
		(value) => value[1] === newManager.name
	);
}
export default newManagerRanking;
