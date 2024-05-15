import { Article, getShippingCost } from ".";

describe("getShippingCost", () => {
  describe("when articles total price is greater than or equal to 100 (10000 cents)", () => {
    const articles: Article[] = [
      { name: "Table", price: 30000, weightG: 20000, quantity: 1 },
      { name: "Chair", price: 9000, weightG: 4500, quantity: 4 },
    ];

    it("returns 0", () => {
      expect(getShippingCost(articles)).toEqual(0);
    });
  });

  describe("when articles total price is less than 100 (10000 cents)", () => {
    it("returns 10 euros per kilogram of total weight (i.e. 1 cent per gram)", () => {
      const articles: Article[] = [
        { name: "Salt", price: 300, weightG: 150, quantity: 2 },
        { name: "Chair", price: 9000, weightG: 4500, quantity: 1 },
      ];

      expect(getShippingCost(articles)).toEqual(150 * 2 + 4500 * 1);
    });
  });
});
