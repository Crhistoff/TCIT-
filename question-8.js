import { paddocks, paddockManagers, paddockType } from "./data";

// 8 Objeto en que las claves sean el tipo de
// cultivo concatenado con su año de plantación
// (la concatenación tiene un separador de guión ‘-’,
//por ejemplo AVELLANOS-2020) y el valor otro objeto en el
//cual la clave sea el id del administrador y el valor el nombre del administrador
function paddocksManagers() {
	const clonePaddocks = [...paddocks];
	return clonePaddocks.reduce((acc, curr) => {
		const namePaddock = paddockType.find(
			({ id }) => id === curr.paddockTypeId
		).name;
		const nameManager = paddockManagers.find(
			({ id }) => id === curr.paddockManagerId
		).name;
		const keyObject = `${namePaddock}-${curr.harvestYear}`;
		acc[keyObject] = {
			...(acc[keyObject] || {}),
			...{ [curr.paddockManagerId]: nameManager },
		};
		return acc;
	}, {});
}
export default paddocksManagers;
