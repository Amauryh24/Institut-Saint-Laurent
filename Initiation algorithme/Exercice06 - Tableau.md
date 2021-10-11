# Exercice 04: Recheche valeur.

On va reprendre l'exercice permettant d'identifier la valeur maximale et la valeur maximale et la valeur minimal d'une suite de valeurs introduite. Mais dans cette version de l'exercice, on va devoir à la fin, en plus afficher toutes les valeurs qui ont été introduites

Attention: l'utilisateur peut introduire un nombre quelconque de valeur tant qu'il ne dépasse pas la capacité maximale de votre tableau. Donc, avec un tableau de taille 15, l'utilisateur pourra introduire entre 0 et 15 valeurs!

Dans l'affichage, il ne faudra bien sûr qu'afficher les éléments qui auront reçu une valeur!!

### Variables

```
tabValue[7]: Taille de mon tableau et rempli par l'utilisateur
tabIntroduit[] : Tableau de une ou plusieurs valeurs à tester
testerNbr: nombre de valeur à tester introduite par l'utilisateur
valeur: Valeur introduite par l'utilisateur
currentValue: valeur courante entrée par l'utilisateur pour le tableau
valeurNbr: nombre de valeur introduite par l'utilisateur
```

### Initialisation

```
écrire("voulez-vous commencer?, oui/non)
lire (response)
```

### Algorithme

```
i = 0
valeurNbr = 0
while (response == "oui" and i < 7)

    écrire("entrer une valeur numérique:", currentValue)
    tab[i] = currentValue

    écrire("voulez vous entrez une autre valeur?", oui/non)
    lire(response)
    i = i + 1
    valeurNbr = valeurNbr + 1
end while

response = oui
j = 0
testerNbr = 0
while (response == oui)
    écrire("Veuillez introduire une valeur ou plus et vérifier si elle/elles existe(nt) dans le tableau")
    lire (valeur)
    tabIntroduit[j] = valeur
    testerNbr = testerNbr + 1
    j = j + 1
    écrire("voulez-vous introduire une autre valeur? oui/non)
    lire response
end while

j = 0
k = 0
while (j < valeurNbr)
    while (k < testerNbr)
        if (tabValue[j] == tabIntroduit[k])
            then écrire("la valeur: ", tabIntroduit[k], "introduite est présente dans le tableau à la position:", j + 1)
        end if
        k = k + 1
    end While
    j = j + 1
end while

```

## phase de test

| Desscription | Données        | Résultat attendu                                                      | Résultat obtenu                                                       | Status du test |
| ------------ | -------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------- |
| Cas général  | 45,6,78,-1,170 | - Valeur maximal= 170 en position 5, valeur minimal= -1 en position 4 | - Valeur maximal= 170 en position 5, valeur minimal= -1 en position 4 | Ok             |
| test limite  | -1,-45,30,-15  | - Valeur maximal= 30 en position 3, valeur minimal= -45 en position 2 | - Valeur maximal= 30 en position 3, valeur minimal= -45 en position 2 | Ok             |
