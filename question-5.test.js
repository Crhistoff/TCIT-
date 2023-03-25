import biggestAvocadoFarms from "./question-5";

test("Should be equal to correct answer to total Area: ", () => {
	expect(biggestAvocadoFarms()).toEqual([23925, 21914]);
});
