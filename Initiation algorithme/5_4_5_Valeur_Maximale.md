# Exercice 5_4_5: Valeur maximale et minimale avec tableau.

On va reprendre l'exercice permettant d'identifier la valeur maximale et la valeur maximale et la valeur minimal d'une suite de valeurs introduite. Mais dans cette version de l'exercice, on va devoir à la fin, en plus afficher toutes les valeurs qui ont été introduites

Attention: l'utilisateur peut introduire un nombre quelconque de valeur tant qu'il ne dépasse pas la capacité maximale de votre tableau. Donc, avec un tableau de taille 15, l'utilisateur pourra introduire entre 0 et 15 valeurs!

Dans l'affichage, il ne faudra bien sûr qu'afficher les éléments qui auront reçu une valeur!!

## Variables

- currentValue: Valeur courante entrée par l'utilisateur
- posMIN: stocker la valeur minimale entrée par l'utilisateur
- posMAX: stocker la valeur maximale entrée par l'utilisateur
- tabValue[15]: Taille de mon tableau
- valeurNbr: nombre de valeur introduite par l'utilisateur
- response: Réponse entrée par l'utilisateur
- i, j: index de tableau

## Algorithme

```
//Initialisation
écrire("voulez-vous commencer?, oui/non)
lire (response)

// Début
valeurNbr = 0
i = 0
while (response == "oui" and i < 15)
    écrire("entrer une valeur numérique:")
    lire(currentValue)
    tabValue[i] = currentValue

    if (valeurNbr == 0)
        then
            valeurMAX = currentValue
            valeurMIN = currentValue
    end if

    if (currentValue > valeurMAX)
        then
            valeurMAX = currentValue
            posMAX = i
    end if

    if (currentValue < valeurMIN)
        then
            valeurMIN = currentValue
            posMIN = i
    end if
    écrire("voulez vous entrez une autre valeur?", oui/non)
    lire(response)
    valeurNbr = valeurNbr + 1
    i = i + 1
end while

écrire("voici toute les valeurs introduites:)
j = 0
while (j < valeurNbr)
    écrire("valeur", j + 1, ", tab[j] )
    j = j + 1
end while
écrire("la valeur maximale est:", valeurMAX, "en position: ", posMAX + 1);
écrire("la valeur minimale est:", valeurMIN, "en position: ", posMIN + 1);

// Fin
```

## phase de test

| Description | Données        | Résultat attendu                                                      | Résultat obtenu                                                       | Status du test |
| ----------- | -------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------- |
| Cas général | 45,6,78,-1,170 | - Valeur maximal= 170 en position 5, valeur minimal= -1 en position 4 | - Valeur maximal= 170 en position 5, valeur minimal= -1 en position 4 | Ok             |
| test limite | -1,-45,30,-15  | - Valeur maximal= 30 en position 3, valeur minimal= -45 en position 2 | - Valeur maximal= 30 en position 3, valeur minimal= -45 en position 2 | Ok             |
