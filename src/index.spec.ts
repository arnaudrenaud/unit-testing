import { Article, getShippingCost } from ".";

describe("getShippingCost", () => {
  const articles: Article[] = [
    { name: "Table", price: 300, weightG: 20000, quantity: 1 },
    { name: "Chair", price: 90, weightG: 4500, quantity: 4 },
  ];

  it("returns 10 euros per kilogram of total weight (i.e. 1 cent per gram)", () => {
    expect(getShippingCost(articles)).toEqual(20000 * 1 + 4500 * 4 * 1);
  });
});
