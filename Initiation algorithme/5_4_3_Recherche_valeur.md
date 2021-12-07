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

- tabValues[5]: Tableau de taille 5 avec des valeurs à rechercher
- tabCompare[] : Tableau avec les valeurs de recherche
- cptCompare: nombre de valeur introduite par l'utilisateur pour faire la comparaison
- currentValue: valeur courante entrée par l'utilisateur
- response: Réponse entrée par l'utilisateur
- i,j,k: index de tableau

## Algorithme

```
// Initialisation
écrire("Voulez-vous commencer?, O/N)
lire (response)

// Début
// création du tableau de valeur à rechercher
i = 0
while (response === "O" and i < 5)
    écrire("entrer une valeur numérique:")
    lire(currentValue)
    tabValues[i] = currentValue
    i = i + 1
end while

// Création du tableau avec les valeurs de recherche
response = O
cptCompare = 0
while (response === "O")
    écrire("Introduire un nombre à rechercher")
    lire (currentValue)
    // Vérifier si une valeur de recherche est déjà présente
    j = 0
    while j < cptCompare + 1
        if tabCompare[j] === currentValue
            then écrire("La valeur de recherche existe déjà!")
            else
                j = j + 1
                tabCompare[j] = currentValue
                cptCompare = cptCompare + 1
        endif
    end while
    écrire("voulez-vous introduire une autre valeur de recherche? O/N)
    lire (response)
end while

//Rechercher la valeur
j = 0
while (j < 5)
    k = 0
    while (k < cptCompare)
        if (tabValues[j] === tabCompare[k])à
            then
             écrire("la valeur de recherche: ", tabCompare[k], " est présente dans le tableau à la position:", j + 1)
        end if
        k = k + 1
    end While
    j = j + 1
end while
// fin

```

## phase de test

| Description            | Données                   | Résultat attendu       | Résultat obtenu        | Status du test |
| ---------------------- | ------------------------- | ---------------------- | ---------------------- | -------------- |
| Pour une valeur        | [-5,65,22,2,0,4], [-5]    | -5 est dans le tableau | 45 est dans le tableau | ok             |
| Pour plusieurs valeurs | [-5,65,22,2,0,4], [0,0,6] | 0 est dans le tableau  | 0 est dans le tableau  | ok             |
