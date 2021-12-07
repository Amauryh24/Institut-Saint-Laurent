# Exercice 5_4_7: Sous-algorithme 01

Écrivez un sous-algorithme qui renvoie la somme de cinq nombres fournis en paramètre.

## Variables

- tabInt[5] : tableau de 5 nombres entiers
- currentValue : Valeur courante entrée par l'utilisateur

## Algorithme principal

```
//Début
i = 0
while i < 5
    écrire("Entrer un nombre entier")
    lire(currentValue)
    tabInt[i] = currenValue
    i = i + 1
end while

call getAddition(tabInt, i)
//Fin
```

### Sous-algorithme

#### Paramètre input

- tab : La tableau pour faire la somme de chaques valeurs
- tailleTab : taille du tableau pour faire la somme de chaques valeurs

#### paramètre output (variables)

- sum : La somme de tout les éléments du tableau
- i : index du tableau

```
// Début sous-algorithme
getAddition(tab, tailleTab)
sum = 0
i = 0
while i < tailleTab
    sum = sum + tab[i]
    i = i + 1
end while
écrire("La somme des cinqs nombre fournis est: ", sum)
// Fin sous-algorithme
```
