# Exercice 5_4_1: Recheche valeur.

Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse
convienne. En cas de réponse supérieure à 20, on fera apparaitre un message : Plus petit ! et
inversement. Plus grand ! si le nombre est inférieur à 10.

## Variables

- currentValue: Valeur courante entrée par l'utilisateur

## Algorithme

```
// Initialisation

écrire("Veuillez insérer une valeur comprise entre 10 et 20")
lire(currentValue)

//Début
while (currentValue < 10 && currentValue > 20)
    if currentValue < 10
        then écrire("Plus grand !")
    endif
    if (currentValue > 20)
        then écrire("plus petit !")
    endif
    écrire("Insérez une valeur comprise entre 10 et 20")
    lire(currentValue)
end while
//fin
```

## phase de test

| Description | Données | Résultat attendu | Résultat obtenu | Status du test |
| ----------- | ------- | ---------------- | --------------- | -------------- |
| Cas général | 15      | Rien             | Rien            | ok             |
| Cas limite  | 9       | Plus grand!      | Plus grand!     | ok             |
| Cas limite  | 22      | plus petit!      | Plus petit!     | ok             |
