# Exercice 5_4_2: Factorielle

Introduire un nombre à l’écran et afficher sa factorielle.
La factorielle de 8, notée 8 ! vaut 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8.

## Variables

- currentValue: Introduire la valeur courante par l'utilisateur
- resultFact: Résultat de la factorielle du nombre introduit
- response: Vérifier si l'utilisateur veut continuer ou non

## Algorithme

```
//Initialisation

écrire("Trouver la factorielle d'un nombre? O/N")
lire (response)

// début
tant que (response === 'O')
    écrire("Entrer un nombre pour afficher sa factorielle")
    lire (currentValue)
    cpt = 1
    resultFact = 1
        tant que cpt <= currentValue
            resultFact = resultFact * cpt
            cpt = cpt + 1
        fin tant que
    écrire("la factorielle de", currentValue, " vaut:", resultFact);
    écrire("Trouver la factorielle d'un autre nombre? O/N")
    lire(response)
fin tant que
// fin
```

## phase de test

| Description | Données | Résultat attendu | Résultat obtenu | Status du test |
| ----------- | ------- | ---------------- | --------------- | -------------- |
| Cas général | 5       | 120              | 120             | Ok             |
| Test limite | 1       | 1                | 1               | Ok             |
| Test limite | 0       | 1                | 1               | Ok             |
