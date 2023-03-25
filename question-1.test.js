import listPaddockManagersByName from "./question-1";

test("Should be equal to: ", () => {
	expect(listPaddockManagersByName()).toEqual([
		"176812737",
		"78903228",
		"143618668",
		"78684747",
		"132254524",
		"216352696",
	]);
});
