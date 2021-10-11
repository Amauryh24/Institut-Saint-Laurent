# Exercice 04: Recheche valeur.

Étant donné un tableau de taille déterminée (la taille du tableau doit être choisie par vous) de
type entier, il s’agit de demander à l’utilisateur d’introduire une valeur et de rechercher si cette
valeur appartient ou non au tableau.
Avant cela, il aura fallut initialiser le tableau avec des valeurs lues à l’écran. Le nombre de
valeurs introduites doit être égales à la taille du tableau.

- Il faut le faire avec une seule valeur
- Il faut le faire avec une suit de valeurs que l’utilisateur peut introduire
- Procéder aux tests du pseudo-code

  En option :
  On peut faire une autre version de l’exercice qui consiste à stocker dans un tableau, toutes les
  valeurs à rechercher.

### Variables

```
tabValeurs[7]: Taille de mon tableau rempli par l'utilisateur
nOfValeurs: nombre de valeur à tester introduite par l'utilisateur
tabComparaison[] : Tableau de une ou plusieurs valeurs à tester
nOfComparaison: nombre de valeur introduite par l'utilisateur pour faire la comparaison
valeur: Valeur introduite par l'utilisateur
currentValue: valeur courante entrée par l'utilisateur pour le tableau
```

### Initialisation

```
écrire("voulez-vous commencer?, oui/non)
lire (response)
```

### Algorithme

```
i = 0
nOfComparaison = 0
while (response == "oui" and i < 7)

    écrire("entrer une valeur numérique:", currentValue)
    tab[i] = currentValue

    écrire("voulez vous entrez une autre valeur?", oui/non)
    lire(response)
    i = i + 1
    nOfComparaison = nOfComparaison + 1
end while

response = oui
j = 0
nOfValeurs = 0
while (response == oui)
    écrire("Veuillez introduire une valeur ou plus et vérifier si elle/elles existe(nt) dans le tableau")
    lire (valeur)
    tabComparaison[j] = valeur
    nOfValeurs = nOfValeurs + 1
    j = j + 1
    écrire("voulez-vous introduire une autre valeur? oui/non)
    lire (response)
end while

j = 0
k = 0
while (j < nOfComparaison)
    while (k < nOfValeurs)
        if (tabValeurs[j] == tabComparaison[k])
            then écrire("la valeur: ", tabComparaison[k], "introduite est présente dans le tableau à la position:", j + 1)
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
