import newManagerRanking from "./question-9";

test("Should be equal to correct answer to total Area: ", () => {
	expect(newManagerRanking()).toBe(6);
});
