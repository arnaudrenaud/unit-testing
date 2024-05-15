Règles à implémenter pour le calcul des frais de port :

1. 10 par kilogramme de poids total de la commande
2. 0 si le prix total de la commande égale ou dépasse 100
3. si des articles ont des frais de ports spéciaux, ceux-ci s’additionnent aux frais de ports déterminés par le poids, sans y être inclus

---

Exemple de commande dans le 3e cas :

- sel (150 g) en 2 exemplaires
- lampadaire en 2 exemplaires avec 30 euros de frais de port par exemplaire (montant renseigné dans `specialShippingCost`)

Calcul des frais de port :

- frais de port en fonction du poids : 150 g \* 2 = 300 g = 0, 3 kg => 3 EUR
- frais de port spéciaux : 2 \* 30 euros = 60 EUR
- frais de port totaux : 3 + 60 = 63 EUR
