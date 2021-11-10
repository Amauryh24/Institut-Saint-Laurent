# Exercice 5_4_2: Factorielle

le calcule de la factoriel.
L'utilisateur va pouvoir introduire un ensemble de valeurs(0,1,...,n) et pour chaque valeur introduite,
il faut lui afficher la valeur de la factorielle.

Exemple:
5! => 1 _ 2 _ 3 _ 4 _ 5
0! => 1
1! => 1

## Variables

- valeur: valeur introduite par l'utilisateur
- factoriel: résultat de la factorielle
- iscontinure = false : on vérifie si l'utilisateur veux continuer ou non

## Algorithme

```
//Initialisation
écrire("voulez vous calculer la factorielle d'un nombre? O/N)
lire(response)

// début
tand que (response == "O")
    écrire("insérez une valeur numérique")
    lire(valeur)
        cpt = 1
        factoriel = 1
        tant que cpt <= valeur
            factoriel = factoriel * cpt
            cpt = cpt + 1
        fin tant que
        écrire("la factorielle de", valeur, "est:", factoriel);
        écrire("entrer une nouvelle valeur? O/N)
        lire(response)
fin tant que
// fin
```

## phase de test

| Desscription | Données | Résultat attendu | Résultat obtenu | Status du test |
| ------------ | ------- | ---------------- | --------------- | -------------- |
| Cas général  | 5       | 120              | 120             | Ok             |
| Test limite  | 1       | 1                | 1               | Ok             |
| Test limite  | 0       | 1                | 1               | Ok             |
