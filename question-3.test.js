import sortFarmManagerByAdminArea from "./question-3";

test("Should be equal to correct answer to total Area: ", () => {
	expect(sortFarmManagerByAdminArea()).toEqual([
		"OSCAR PEREZ ZUÑIGA",
		"CARLOS PEREZ GONZALEZ",
		"EFRAIN SOTO VERA",
		"JOAQUIN ANDRADE SANDOVAL",
		"JUAN TAPIA BURGOS",
		"ANDRES VIÑALES CIENFUEGOS",
	]);
});
