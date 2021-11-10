# Exercice 5_4_3: Recheche valeur.

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

## Variables

- tabValues[7]: Taille de mon tableau rempli par l'utilisateur
- nOfValues: nombre de valeur à tester introduite par l'utilisateur
- tabCompare[] : Tableau de une ou plusieurs valeurs à tester
- nOfCompare: nombre de valeur introduite par l'utilisateur pour faire la comparaison
- currentValue: valeur courante entrée par l'utilisateur pour le tableau
- response: Réponse entrée par l'utilisateur
- i,j,k: index de tableau

## Algorithme

```
// Initialisation
écrire("voulez-vous commencer?, oui/non)
lire (response)

// Début
i = 0
nOfValues = 0
while (response == "oui" and i < 7)

    écrire("entrer une valeur numérique:", currentValue)
    tab[i] = currentValue

    écrire("voulez vous entrez une autre valeur?", oui/non)
    lire(response)
    i = i + 1
    nOfValues = nOfValues + 1
end while

response = oui
j = 0
nOfCompare = 0
while (response == oui)
    écrire("Veuillez introduire une valeur ou plus et vérifier si elle existe/elles existent dans le tableau")
    lire (currentValue)
    tabCompare[j] = currentValue
    nOfCompare = nOfCompare + 1
    j = j + 1
    écrire("voulez-vous introduire une autre valeur? oui/non)
    lire (response)
end while

j = 0
while (j < nOfValues)
    k = 0
    while (k < nOfCompare)
        if (tabValues[j] == tabCompare[k])
            then écrire("la valeur: ", tabCompare[k], "introduite est présente dans le tableau à la position:", j + 1)
        end if
        k = k + 1
    end While
    j = j + 1
end while
// fin

```

## phase de test

| Desscription           | Données                      | Résultat attendu             | Résultat obtenu              | Status du test |
| ---------------------- | ---------------------------- | ---------------------------- | ---------------------------- | -------------- |
| Pour une valeur        | 45,-5,65,22,2,0,4 & 45       | 45 est dans le tableau       | 45 est dans le tableau       | ok             |
| Pour plusieurs valeurs | 45,-5,65,22,2,0,4 & 45,11,22 | 45 et 22 est dans le tableau | 45 et 22 est dans le tableau | ok             |
