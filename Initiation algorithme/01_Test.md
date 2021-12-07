# Test 01: Test de positionement en algorithme

Il s'agit de prendre deux tableau d'entiers dont les deux tailles peuvent être identiques ou différents.
Chaque tableau aura une valeur dans chacun de ses éléments.

Objectif: Il faut créer un troisième tableau qui contient la liste des valeurs de chacun des deux tableaux mais qui n'apparaissent que dans un seul tableau. Dans chaque tableau, chaque valeur y est unique

## Variables

- tabInt1[] : Premier tableau de nombres entiers positifs initialisé par l'utilisateur
- tabSize1 : La taille du premier tableau rentré par l'utilisateur
- tabInt2[] : Second tableau de nombres entiers positifs initialisé par l'utilisateur
- tabSize2 : La taille du second tableau rentré par l'utilisateur
- tabUnique[] : Troisième tableau avec seulement les valeurs unique
- tabUniqueSize : La taille du troisième tableau
- i,j,k : index de tableau
- isUnique : Vérifie si la valeur est unique

## Algorithme principal

```
//Début
while (tabSize1 == 0 or tabSize2 == 0)
    écrire("Rentrer le nombre de valeur du premier tableau (taille du tableau)")
    lire(tabSize1)
    écrire("Rentrer le nombre de valeur du second tableau (taille du tableau)")
    lire(tabSize2)
end while
call initTab(tabInt1, tabSize1)
call initTab(tabInt2, tabSize2)

tabUnique[0] = tabInt1[0]
tabUniqueSize = 1
call addUniqueValueTab(tabInt1, tabUnique, tabSize1, tabUniqueSize)
call addUniqueValueTab(tabInt2, tabUnique, tabSize2, tabUniqueSize)

call sortTab(tabUnique, tabUniqueSize)

écrire("voici toute les valeurs unique introduites:)
i = 0
while (i < tabUniqueSize)
    écrire("valeur", i + 1, ", tabUnique[i] )
    i = i + 1
end while
//Fin
```

### Sous-algorithme 01 - initTab(tab, tailleTab)

#### Paramètre input

- tab : Le tableau à initialiser par l'utilisateur
- tailleTab : taille du tableau choisi par l'utilisateur

#### paramètre output (variables)

- currentValue: Valeur courante entré par l'utilisateur
- i : index du tableau

```
// Début sous-algorithme
initTab(tab, tailleTab)

i = 0
while i < tailleTab
    écrire("Insérer la valeur", i + 1)
    lire(currentValue)
    tab[i] = currentValue
    i = i + 1
end while
// Fin sous-algorithme
```

### Sous-algorithme 02 - addUniqueValueTab(tab1, tab2, size1, size2)

#### Paramètre input

- tab1 : Le tableau des valeurs insérer par l'utilisateur
- tab2 : Le tableau des valeurs unique
- size1 : taille du tableau choisi par l'utilisateur
- size2 : taille du tableau unique

#### paramètre output (variables)

- isUnique: Valeur courante entré par l'utilisateur
- i,j : index du tableau

```
// Début sous-algorithme
addUniqueValueTab(tab1, tab2, size1, size2)
i=0
while i < size1
    j = 0
    isUnique = true
    while j < size2
        if tab1[i] == tab2[j]
            then
                isUnique = false
                j = size2 // la valeur n'est pas unique, on force l'arrêt de la boucle et on passe à la valeur i suivante
        endif
        j = j + 1
    end while

    if (isUnique)
        then
            tab2[size2] = tab1[i]
            size2 = size2 + 1
    endif
    i = i + 1
end while
size2 = size2 - 1
//Fin sous algorithme
```

## phase de test

| Description | Données                                       | Résultat attendu         | Résultat obtenu          | Status du test |
| ----------- | --------------------------------------------- | ------------------------ | ------------------------ | -------------- |
| Cas général | [56,12,48,159,45,23,10,17], [189,56,89,12,17] | [10,23,45,48,89,159,189] | [10,23,45,48,89,159,189] | ok             |
| Test limite | [7,7,7,7,7], [7,3,7]                          | [7,3]                    | [7,3]                    | ok             |

## Reflexion

- Initialisation des tableaux par l'utilisateur
- Attribuer la première valeur du premier tableau dans le tableau unique
- Sous-algorithme pour vérifier n tableau avec tableau unique
- Sous-algorithme pour trier le tableau unique
- Afficher le résultat
- Pas besoin de trié chaque tableau, mais seulement le tableau unique
