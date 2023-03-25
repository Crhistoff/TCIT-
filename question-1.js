import { paddockManagers } from "./data";

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
	const clonePaddockManagers = [...paddockManagers];
	return clonePaddockManagers
		.sort((a, b) => a.name.localeCompare(b.name))
		.map(({ taxNumber }) => taxNumber);
}

export default listPaddockManagersByName;
