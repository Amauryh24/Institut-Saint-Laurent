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
tabValues[7]: Taille de mon tableau rempli par l'utilisateur
nOfValues: nombre de valeur à tester introduite par l'utilisateur
tabCompare[] : Tableau de une ou plusieurs valeurs à tester
nOfCompare: nombre de valeur introduite par l'utilisateur pour faire la comparaison
currentValue: valeur courante entrée par l'utilisateur pour le tableau
response: Réponse entrée par l'utilisateur
```

### Initialisation

```
écrire("voulez-vous commencer?, oui/non)
lire (response)
```

### Algorithme

```
i = 0
nOfCompare = 0
while (response == "oui" and i < 7)

    écrire("entrer une valeur numérique:", currentValue)
    tab[i] = currentValue

    écrire("voulez vous entrez une autre valeur?", oui/non)
    lire(response)
    i = i + 1
    nOfCompare = nOfCompare + 1
end while

response = oui
j = 0
nOfValues = 0
while (response == oui)
    écrire("Veuillez introduire une valeur ou plus et vérifier si elle/elles existe(nt) dans le tableau")
    lire (currentValue)
    tabCompare[j] = currentValue
    nOfValues = nOfValues + 1
    j = j + 1
    écrire("voulez-vous introduire une autre valeur? oui/non)
    lire (response)
end while

j = 0
k = 0
while (j < nOfCompare)
    while (k < nOfValues)
        if (tabValues[j] == tabCompare[k])
            then écrire("la valeur: ", tabCompare[k], "introduite est présente dans le tableau à la position:", j + 1)
        end if
        k = k + 1
    end While
    j = j + 1
end while

```

## phase de test

| Desscription | Données | Résultat attendu | Résultat obtenu | Status du test |
| ------------ | ------- | ---------------- | --------------- | -------------- |
