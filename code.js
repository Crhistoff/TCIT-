const farms = [
	{ id: 1, name: "AGRICOLA SANTA ANA" },
	{ id: 2, name: "VINA SANTA PAULA" },
	{ id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" },
];

// area m2

const paddocks = [
	{
		paddockManagerId: 6,
		farmId: 1,
		paddockTypeId: 1,
		harvestYear: 2019,
		area: 1200,
	},
	{
		paddockManagerId: 1,
		farmId: 3,
		paddockTypeId: 4,
		harvestYear: 2019,
		area: 500,
	},
	{
		paddockManagerId: 5,
		farmId: 3,
		paddockTypeId: 2,
		harvestYear: 2020,
		area: 20000,
	},
	{
		paddockManagerId: 2,
		farmId: 2,
		paddockTypeId: 3,
		harvestYear: 2021,
		area: 8401,
	},
	{
		paddockManagerId: 3,
		farmId: 1,
		paddockTypeId: 1,
		harvestYear: 2020,
		area: 2877,
	},
	{
		paddockManagerId: 5,
		farmId: 2,
		paddockTypeId: 2,
		harvestYear: 2017,
		area: 15902,
	},
	{
		paddockManagerId: 3,
		farmId: 3,
		paddockTypeId: 2,
		harvestYear: 2018,
		area: 1736,
	},
	{
		paddockManagerId: 2,
		farmId: 3,
		paddockTypeId: 3,
		harvestYear: 2020,
		area: 2965,
	},
	{
		paddockManagerId: 4,
		farmId: 3,
		paddockTypeId: 4,
		harvestYear: 2018,
		area: 1651,
	},
	{
		paddockManagerId: 5,
		farmId: 1,
		paddockTypeId: 1,
		harvestYear: 2018,
		area: 700,
	},
	{
		paddockManagerId: 1,
		farmId: 2,
		paddockTypeId: 1,
		harvestYear: 2019,
		area: 7956,
	},
	{
		paddockManagerId: 5,
		farmId: 3,
		paddockTypeId: 2,
		harvestYear: 2020,
		area: 3745,
	},
	{
		paddockManagerId: 6,
		farmId: 1,
		paddockTypeId: 3,
		harvestYear: 2021,
		area: 11362,
	},
	{
		paddockManagerId: 2,
		farmId: 3,
		paddockTypeId: 3,
		harvestYear: 2021,
		area: 300,
	},
	{
		paddockManagerId: 3,
		farmId: 2,
		paddockTypeId: 2,
		harvestYear: 2020,
		area: 19188,
	},
	{
		paddockManagerId: 3,
		farmId: 1,
		paddockTypeId: 1,
		harvestYear: 2019,
		area: 17137,
	},
	{
		paddockManagerId: 4,
		farmId: 3,
		paddockTypeId: 2,
		harvestYear: 2020,
		area: 100,
	},
	{
		paddockManagerId: 2,
		farmId: 1,
		paddockTypeId: 3,
		harvestYear: 2019,
		area: 11845,
	},
	{
		paddockManagerId: 5,
		farmId: 2,
		paddockTypeId: 1,
		harvestYear: 2018,
		area: 15969,
	},
	{
		paddockManagerId: 1,
		farmId: 3,
		paddockTypeId: 1,
		harvestYear: 2029,
		area: 10420,
	},
	{
		paddockManagerId: 5,
		farmId: 2,
		paddockTypeId: 3,
		harvestYear: 2010,
		area: 3200,
	},
	{
		paddockManagerId: 6,
		farmId: 1,
		paddockTypeId: 2,
		harvestYear: 2012,
		area: 10587,
	},
	{
		paddockManagerId: 2,
		farmId: 2,
		paddockTypeId: 2,
		harvestYear: 2018,
		area: 16750,
	},
];

const paddockManagers = [
	{ id: 1, taxNumber: "132254524", name: "JUAN TAPIA BURGOS" },
	{ id: 2, taxNumber: "143618668", name: "EFRAIN SOTO VERA" },
	{ id: 3, taxNumber: "78903228", name: "CARLOS PEREZ GONZALEZ" },
	{ id: 4, taxNumber: "176812737", name: "ANDRES VIÑALES CIENFUEGOS" },
	{ id: 5, taxNumber: "216352696", name: "OSCAR PEREZ ZUÑIGA" },
	{ id: 6, taxNumber: "78684747", name: "JOAQUIN ANDRADE SANDOVAL" },
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
	{ id: 1, name: "PALTOS" },
	{ id: 2, name: "AVELLANOS" },
	{ id: 3, name: "CEREZAS" },
	{ id: 4, name: "NOGALES" },
];

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
	return paddockManagers.map((paddockManager) => paddockManager.id);
}

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
	const clonePaddockManagers = structuredClone(paddockManagers);
	return clonePaddockManagers
		.sort((a, b) => a.name.localeCompare(b.name))
		.map(({ taxNumber }) => taxNumber);
}

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
	const paddockTypeIdTotals = paddocks.reduce((acc, curr) => {
		acc[curr.paddockTypeId] = (acc[curr.paddockTypeId] || 0) + curr.area;
		return acc;
	}, {});

	const sortedDescending = Object.entries(paddockTypeIdTotals).sort(
		(a, b) => b[1] - a[1]
	);

	return sortedDescending.map((value) => value[0]);

	// ["AVELLANOS","PALTOS","CEREZAS","NOGALES"]
}

// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
	const managersIdTotals = paddocks.reduce((acc, curr) => {
		acc[curr.paddockManagerId] = (acc[curr.paddockManagerId] || 0) + curr.area;
		return acc;
	}, {});

	const sortedDescending = Object.entries(managersIdTotals).sort(
		(a, b) => b[1] - a[1]
	);

	return sortedDescending.map(
		(value) => paddockManagers.find((manager) => manager.id == [value[0]]).name
	);
}

// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
	return paddocks.reduce((acc, curr) => {
		const { name } = farms.find(({ id }) => curr.farmId === id);
		acc[name] = [
			...(acc[name] || []),
			paddockManagers.find(({ id }) => curr.paddockManagerId === id).name,
		].sort((a, b) => a.localeCompare(b));
		return acc;
	}, {});

	// {
	// 	'AGRICOLA SANTA ANA': [
	// 		'CARLOS PEREZ GONZALEZ',
	// 		'CARLOS PEREZ GONZALEZ',
	// 		'EFRAIN SOTO VERA',
	// 		'JOAQUIN ANDRADE SANDOVAL',
	// 		'JOAQUIN ANDRADE SANDOVAL',
	// 		'JOAQUIN ANDRADE SANDOVAL',
	// 		'OSCAR PEREZ ZUÑIGA'
	// 	],
	// 	'FORESTAL Y AGRICOLA LO ENCINA': [
	// 		'ANDRES VIÑALES CIENFUEGOS',
	// 		'ANDRES VIÑALES CIENFUEGOS',
	// 		'CARLOS PEREZ GONZALEZ',
	// 		'EFRAIN SOTO VERA',
	// 		'EFRAIN SOTO VERA',
	// 		'JUAN TAPIA BURGOS',
	// 		'JUAN TAPIA BURGOS',
	// 		'OSCAR PEREZ ZUÑIGA',
	// 		'OSCAR PEREZ ZUÑIGA'
	// 	],
	// 	'VINA SANTA PAULA': [
	// 		'CARLOS PEREZ GONZALEZ',
	// 		'EFRAIN SOTO VERA',
	// 		'EFRAIN SOTO VERA',
	// 		'JUAN TAPIA BURGOS',
	// 		'OSCAR PEREZ ZUÑIGA',
	// 		'OSCAR PEREZ ZUÑIGA',
	// 		'OSCAR PEREZ ZUÑIGA'
	// 	]
	// }
}

// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
function biggestAvocadoFarms() {
	const paddockTypeName = "PALTOS";
	const minimumHectares = 20000;
	const farmIdTotals = paddocks.reduce((acc, curr) => {
		const { name } = paddockType.find(({ id }) => id === curr.paddockTypeId);
		if (name === paddockTypeName) {
			acc[curr.farmId] = (acc[curr.farmId] || 0) + curr.area;
		}
		return acc;
	}, {});

	return Object.entries(farmIdTotals)
		.map((value) => value[1])
		.filter((total) => total > minimumHectares)
		.sort((a, b) => b - a);

	// [23925, 21914];
}

// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
	// CODE HERE
	const farmSearched = { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" };
	const paddockSearched = { id: 3, name: "CEREZAS" };
	const minimumArea = 1000;

	return paddocks
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

	// [ 'EFRAIN SOTO VERA' ]
}

// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
	return paddocks.reduce((acc, curr) => {
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

	// {
	// 	'JOAQUIN ANDRADE SANDOVAL': [ 'AGRICOLA SANTA ANA' ],
	// 	'JUAN TAPIA BURGOS': [
	// 		'FORESTAL Y AGRICOLA LO ENCINA',
	// 		'VINA SANTA PAULA'
	// 	],
	// 	'OSCAR PEREZ ZUÑIGA': [
	// 		'AGRICOLA SANTA ANA',
	// 		'FORESTAL Y AGRICOLA LO ENCINA',
	// 		'VINA SANTA PAULA'
	// 	],
	// 	'EFRAIN SOTO VERA': [
	// 		'AGRICOLA SANTA ANA',
	// 		'FORESTAL Y AGRICOLA LO ENCINA',
	// 		'VINA SANTA PAULA'
	// 	],
	// 	'CARLOS PEREZ GONZALEZ': [
	// 		'AGRICOLA SANTA ANA',
	// 		'FORESTAL Y AGRICOLA LO ENCINA',
	// 		'VINA SANTA PAULA'
	// 	],
	// 	'ANDRES VIÑALES CIENFUEGOS': [ 'FORESTAL Y AGRICOLA LO ENCINA' ]
	// }
}

// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
function paddocksManagers() {
	return paddocks.reduce((acc, curr) => {
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

	// {
	// 	'PALTOS-2019': {
	// 		'1': 'JUAN TAPIA BURGOS',
	// 		'3': 'CARLOS PEREZ GONZALEZ',
	// 		'6': 'JOAQUIN ANDRADE SANDOVAL'
	// 	},
	// 	'NOGALES-2019': { '1': 'JUAN TAPIA BURGOS' },
	// 	'AVELLANOS-2020': {
	// 		'3': 'CARLOS PEREZ GONZALEZ',
	// 		'4': 'ANDRES VIÑALES CIENFUEGOS',
	// 		'5': 'OSCAR PEREZ ZUÑIGA'
	// 	},
	// 	'CEREZAS-2021': {
	// 		'2': 'EFRAIN SOTO VERA',
	// 		'6': 'JOAQUIN ANDRADE SANDOVAL'
	// 	},
	// 	'PALTOS-2020': { '3': 'CARLOS PEREZ GONZALEZ' },
	// 	'AVELLANOS-2017': { '5': 'OSCAR PEREZ ZUÑIGA' },
	// 	'AVELLANOS-2018': {
	// 		'2': 'EFRAIN SOTO VERA',
	// 		'3': 'CARLOS PEREZ GONZALEZ'
	// 	},
	// 	'CEREZAS-2020': { '2': 'EFRAIN SOTO VERA' },
	// 	'NOGALES-2018': { '4': 'ANDRES VIÑALES CIENFUEGOS' },
	// 	'PALTOS-2018': { '5': 'OSCAR PEREZ ZUÑIGA' },
	// 	'CEREZAS-2019': { '2': 'EFRAIN SOTO VERA' },
	// 	'PALTOS-2029': { '1': 'JUAN TAPIA BURGOS' },
	// 	'CEREZAS-2010': { '5': 'OSCAR PEREZ ZUÑIGA' },
	// 	'AVELLANOS-2012': { '6': 'JOAQUIN ANDRADE SANDOVAL' }
	// }
}

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newManagerRanking() {
	let paddocksClone = structuredClone(paddocks);
	let managersClone = structuredClone(paddockManagers);
	let newManager = {
		id: 7,
		taxNumber: "123456789",
		name: "CARLOS ECHEVARRIA MESIAS",
	};
	let newPadock = {
		paddockManagerId: 7,
		farmId: 1,
		paddockTypeId: 4,
		harvestYear: 2017,
		area: 900,
	};
	managersClone.push(newManager);
	paddocksClone.push(newPadock);

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

	//6
}

console.log("Pregunta 0");
console.log(listPaddockManagerIds());
console.log("Pregunta 1");
console.log(listPaddockManagersByName());
console.log("Pregunta 2");
console.log(sortPaddockTypeByTotalArea());
console.log("Pregunta 3");
console.log(sortFarmManagerByAdminArea());
console.log("Pregunta 4");
console.log(farmManagerNames());
console.log("Pregunta 5");
console.log(biggestAvocadoFarms());
console.log("Pregunta 6");
console.log(biggestCherriesManagers());
console.log("Pregunta 7");
console.log(farmManagerPaddocks());
console.log("Pregunta 8");
console.log(paddocksManagers());
console.log("Pregunta 9");
console.log(newManagerRanking());
