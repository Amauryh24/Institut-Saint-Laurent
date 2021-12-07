# Exercice 5_4_7: Sous-algorithme 02

Écrivez un sous-algorithme permettant de tester si un tableau d’entiers est trié ou non

### Sous-algorithme

#### Paramètre input

#### paramètre output (variables)

- isSort : Booléen qui vérifie à chaque itération si c'est trié
- i : index

```
// Début sous-algorithme
tabIsSort(tab,tailleTab)

isSort = true
i = 1
while (i < tailleTab and isSort === true)
    if tab[i - 1] <= tab[1]
        then isSort = true
        else isSort = false
    endif
end While

if (isSort)
    then écrire("Le tableau est trié")
    else écrire("Le tableau n'est pas trié")
end if
// Fin sous-algorithme
```
