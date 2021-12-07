# Exercice 5_4_7: Sous-algorithme 02

Écrivez un sous-algorithme qui calcule la moyenne de deux nombres.

## Variables

- nbr1, nbr2 : Nombre entier entré par l'utilisateur

## Algorithme principal

```
//Initialisation
écrire("Entrer le un nombre")
lire(nbre1)
écrire("Entrer le second nombre")
lire(nbre2)

//Début
call getAverage(nbr1, nbre2)
//Fin
```

### Sous-algorithme

#### Paramètre input

- a,b : Nombre entier pour faire la moyenne

#### paramètre output (variables)

- average : Le résultat de la moyenne

```
// Début sous-algorithme
getAverage(a,b)
average = (a + b) / 2
écrire("La moyenne de ",a," et ",b," est de ", average)
// Fin
```
