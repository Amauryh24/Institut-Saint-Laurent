# Exercice 5_4_7: Calcul du PGCD

Le PGCD de deux nombres est le plus grand nombre qui peut diviser ces derniers. Par
exemple, le PGCD de quinze et douze est trois et celui de vingt-quatre et dix-huit est six.

Pour le calculer, nous devons disposer de deux nombres a et b avec a supérieur à b. Ensuite,
nous effectuons la division entière de a par b

- si le reste est nul, alors nous avons terminé ;
- si le reste est non nul, nous revenons au début en remplaçant a par b et b par le reste.

## Variables

- nbr1: Premier nombre entré par l'utilisateur
- nbr2: Second nombre entré par l'utilisateur
- PGCD: le dernier reste non nul
- temp: stocker temporairement la variable pour permuter a et b
- reste: le reste de la soustraction de a par b
- response: Réponse entrée par l'utilisateur
- a,b : stocker les valeurs de nbre1 et nbre2 respectivement

## Algorithme

```
//Initialisation
écrire("voulez-vous trouver le plus grand commun diviseur(PGCD) de deux nombre entier ? O/N")
lire(response)

//Début
while(response === 'O')
écrire("Veuillez entrer le premier nombre entier")
lire(nbr1)
écrire("Veuillez entrer le second nombre entier")
lire(nbr2)

a = nbr1
b = nbr2
reste = 1
temp = 0

while (reste <> 0)
    if (a < b)
        then
            temp = a
            a = b
            b = temp
    endif

    reste = a - b
    PGCD = b

    a = b
    b = reste

end while

écrire("le PGCD de", a, "et", b,"est un diviseur de:", PGCD )
écrire("Voulez-vous rechercher un PGCD de deux nombre entier?" )
lire(response)

//Fin

```

## phase de test

| Desscription | Données   | Résultat attendu | Résultat obtenu | Status du test |
| ------------ | --------- | ---------------- | --------------- | -------------- |
| Cas général  | 4 & 3     | 1                | 1               | Ok             |
| test limite  | 15 & 12   | 3                | 3               | Ok             |
| Cas général  | 12 & 15   | 3                | 3               | Ok             |
| test limite  | 210 & 126 | 42               | 42              | Ok             |
| test limite  | 24 & 12   | 12               | 12              | Ok             |
| test limite  | 24 & 24   | 24               | 24              | Ok             |
