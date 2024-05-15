type Article = {
  name: string;
  price: number;
  weightG: number;
  quantity: number;
};

export function getShippingCost(articles: Article[]): number {
  // frais de port : 10 euros par kilogramme du poids total
}
