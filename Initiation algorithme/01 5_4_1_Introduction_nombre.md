# Exercice 5_4_1: Recheche valeur.

Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse
convienne. En cas de réponse supérieure à 20, on fera apparaitre un message : Plus petit ! et
inversement. Plus grand ! si le nombre est inférieur à 10.

## Algorithme

### Variables

```
currentValue: Valeur courante entrée par l'utilisateur
value1 : variable qui stocke la valeur 10
valur2 : variable qui stocke la valeur 20
```

### Initialisation

```
value1 = 10
value2 = 20
écrire("Veuillez insérer une valeur comprise entre 10 et 20")
lire(currentValue)
```

```
while (currentValue < 10 && currentValue > 20)
    if currentValue < 10
        then écrire("Plus grand!")
        else écrire("Plus petit!")
    endif
end while
```

## phase de test

| Description | Données | Résultat attendu | Résultat obtenu | Status du test |
| ----------- | ------- | ---------------- | --------------- | -------------- |
| Cas général | 15      | Rien             | Rien            | ok             |
| Cas limite  | 9       | Plus grand!      | Plus grand!     | ok             |
| Cas limite  | 22      | plus petit!      | Plus petit!     | ok             |
