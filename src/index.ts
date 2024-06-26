export type Article = {
  name: string;
  price: number;
  weightG: number;
  quantity: number;
  specialShippingCost?: number;
};

export function getShippingCost(articles: Article[]): number {
  const totalArticlesPrice = articles.reduce(
    (cost, article) => cost + article.price * article.quantity,
    0
  );
  if (totalArticlesPrice >= 10000) {
    return 0;
  }

  return articles.reduce(
    (cost, article) =>
      cost +
      article.quantity * (article.specialShippingCost || article.weightG),
    0
  );
}
