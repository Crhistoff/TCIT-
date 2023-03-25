import sortPaddockTypeByTotalArea from "./question-2";

test("Should be equal to correct answer to total Area: ", () => {
	expect(sortPaddockTypeByTotalArea()).toEqual([
		"AVELLANOS",
		"PALTOS",
		"CEREZAS",
		"NOGALES",
	]);
});
