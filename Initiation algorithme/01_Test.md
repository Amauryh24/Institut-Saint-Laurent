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

i = 0
while (i < tabSize1)
    j = 0
    while j < tabSize2
        if (tabInt1[i] == tabInt2[j])
            then
                deleteValue(tabInt1, tabSize1, i)
                tabSize1 = tabSize1 - 1
                deleteValue(tabInt2, tabSize2, j)
                tabSize2 = tabSize2 - 1
        endif
        j = j + 1
    end while
    i = i + 1
end while



i = 0
while i < tabSize1
    tabUnique[i] = tabInt1[i]
    i = i + 1
end while

i=0
j= tabSize1
while i < tabSize2
     tabUnique[j] = tabInt2[i]
     i = i + 1
     j = j + 1
end while


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

- currentValue: Valeur courante entrée par l'utilisateur
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

### Sous-algorithme 02 - deleteValue(tab, taille, index)

#### Paramètre input

- tab : le tableau où la valeur sera enlevé
- tailler : taille du tableau
- index : index à partir de cet index qu'on va déplacer tout les autres valeurs

#### paramètre output (variables)

- i : index

```
// Sous algorithme
deleteValue(tab, taille, index)
i = index
while (i < taille)
    tab[i] = tab[i + 1]
    i = i + 1
end while
// Fin sous algorithme
```

## phase de test

| Description | Données                                       | Résultat attendu         | Résultat obtenu          | Status du test |
| ----------- | --------------------------------------------- | ------------------------ | ------------------------ | -------------- |
| Cas général | [56,12,48,159,45,23,10,17], [189,56,89,12,17] | [10,23,45,48,89,159,189] | [10,23,45,48,89,159,189] | ok             |
| Test limite | [7,7,7,7,7], [7,3,7]                          | [7,3]                    | [3,7,7,7]                | moyen          |
