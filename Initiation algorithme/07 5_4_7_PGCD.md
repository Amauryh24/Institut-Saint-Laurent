# Exercice 5_4_7: Calcul du PGCD

Le PGCD de deux nombres est le plus grand nombre qui peut diviser ces derniers. Par
exemple, le PGCD de quinze et douze est trois et celui de vingt-quatre et dix-huit est six.

Pour le calculer, nous devons disposer de deux nombres a et b avec a supérieur à b. Ensuite,
nous effectuons la division entière de a par b

- si le reste est nul, alors nous avons terminé ;
- si le reste est non nul, nous revenons au début en remplaçant a par b et b par le reste.

## Algorithme

### Variables

```
nbr1: Premier nombre entré par l'utilisateur
nbr2: Second nombre entré par l'utilisateur
PGCD: le dernier reste non nul
a: Valeur remplacée par b
b: Valeur remplacée par le reste
temp: stocker temporairement la variable pour permuter a et b
reste: le reste de la soustraction de a par b
response: Réponse entrée par l'utilisateur
```

### Initialisation

```
écrire("voulez-vous trouver le plus grand commun diviseur(PGCD) de deux nombre entier ?oui/non")
lire(response)
```

```
while(response == 'oui')
écrire("Veuillez entrer le premier nombre entier")
lire(nbr1)
écrire("Veuillez entrer le second nombre entier")
lire(nbr2)

a = nbr1
b = nbr2
reste = 1

while (reste <> 0)
    if (a < b)
        then
            temp = a
            a = b
            b = temp
    endif
    reste = a - b
    a = b
    b = reste
    if (reste == 1)
        then
            PGCD = 1
            reste = 0
    endif

    if (reste > 1)
        then PGCD = b
    endif
end while

écrire("le PGCD de", nbr1, "et", nbr2,"est un diviseur de:", PGCD )
écrire("Voulez-vous rechercher un PGCD de deux nombre entier?" )
lire(response)
```
