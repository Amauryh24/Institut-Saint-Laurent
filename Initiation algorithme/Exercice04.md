# Exercice 04: Valeur maximale et Minimale

L'utilisateur va introduire un ensemble de valeur(0,1,...,n). L'objectif, lorsque toutes les valeurs ont été introduite,
sera d'afficher la valeur maximale introduite ainsi que la valeur minimale introduite.
En plus, il faudra indiquer à quelle position, ces valeurs extrêmes auront été introduites.

L'utilisateur n'introduira jamais deux valeurs identiques:
Exemple:
45|6|78|-1||170

Valeur maximal= 170 en position 5
Valeur minimal= -1 en position 4

### Variables

```
currentValue: variable courante entrée par l'utilisateur
positionMIN: stocker la valeur minimale entrée par l'utilisateur
positionMAX: stocker la valeur maximale entrée par l'utilisateur

```

### Initialisation

```
écrire("voulez-vous commencer?, oui/non)
lire (response)
```

### Algorithme

```
positionCPT = 0;

tant que (response == "oui")
    écrire("entrer une valeur numérique:", currentValue)
    if (positionCPT == 0)
        then
            valeurMIN = currentValue;
            valeurMAX = currentValue;
    endif
    positionCPT = positionCPT + 1
    if (currentValue > valeurMAX)
        then
            valeurMAX = currentValue
            positionMAX = positionCPT
    endif
    if (currentValue < valeurMIN)
        then
            valeurMIN = currentValue
            positionMIN = positionCPT
    endif
    écrire("voulez vous continuer ?", oui/non)
    lire(response)
fin tant que
écrire("la valeur maximale est:", valeurMAX, "en position: ", positionMAX);
écrire("la valeur minimale est:", valeurMIN, "en position: ", positionMIN);

```

## phase de test

| Desscription | Données        | Résultat attendu                                                    | Résultat obtenu                                                     | Status du test |
| ------------ | -------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------- |
| Cas général  | 45,6,78,-1,170 | Valeur maximal= 170 en position 5, valeur minimal= -1 en position 4 | valeur maximal= 170 en position 5, valeur minimal= -1 en position 4 | Ok             |
| test limite  | -1,-45,30,-15  | Valeur maximal= 30 en position 3, valeur minimal= -45 en position 2 | Valeur maximal= 30 en position 3, valeur minimal= -45 en position 2 | Ok             |
