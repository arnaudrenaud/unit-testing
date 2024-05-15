export type Article = {
  name: string;
  price: number;
  weightG: number;
  quantity: number;
};

export function getShippingCost(articles: Article[]): number {
  return articles.reduce(
    (cost, article) => cost + article.weightG * article.quantity,
    0
  );
}
