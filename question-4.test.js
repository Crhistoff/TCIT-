import farmManagerNames from "./question-4";

test("Should be equal to correct answer to total Area: ", () => {
	expect(farmManagerNames()).toEqual({
		"AGRICOLA SANTA ANA": ["78684747", "78903228", "216352696", "143618668"],
		"FORESTAL Y AGRICOLA LO ENCINA": [
			"132254524",
			"216352696",
			"78903228",
			"143618668",
			"176812737",
		],
		"VINA SANTA PAULA": ["143618668", "216352696", "132254524", "78903228"],
	});
});
