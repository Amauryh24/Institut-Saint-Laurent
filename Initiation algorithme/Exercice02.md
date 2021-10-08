# Exercice 02: Intervalle Min et Max

On va permettre à notre utilisateur virtuel d'introduire des valeurs numériques à l'écran.
Pour chacunes des valeurs introduite, on va indiquer si oui ou non, cette valeur se trouve dans un intervalle donnée.
Les bornes de cet intervalle ayant été introduite par notre utilisateur.

### variables

- borneMIN : borne minimale entrée par l'utilisateur
- borneMAX : borne maximale entrée par l'utilisateur
- currentValue : Valeur courante entrée par l'utilisateur

### initialisation

écrire("entrez la valeur de la borne minimale");
lire(borneMIN)
écrire("entrez la valeur de la borne maximale");
lire(borneMAX)

### algorithme

```
tant que (borneMIN >= borneMAX)
    écrire("entrez une borne maximale supérieur à", borneMIN)
    lire(borneMAX)
fin tant que

écrire(voulez-vous commencer ? oui/non)
lire(response)

tant que (response == "oui")
    écrire("entrez une valeur)
    lire(value)
    if (value >= borneMIN AND value <= borneMAX)
        then écrire("c'est dans l'intervalle")
        else écrire("ce n'est pas dans l'intervalle")
    end if

    écrire("entrer une nouvelle valeur? oui/non)
    lire(response)
fin tant que
```

## phase de test

| Desscription | Données        | Résultat attendu               | Résultat obtenu            | Status du test |
| ------------ | -------------- | ------------------------------ | -------------------------- | -------------- |
| Cas général  | 5, 10, 5, oui  | Dans intervale et continue     | Dans intervale et continue | Ok             |
| Test limite  | 5, 10, 7, non  | Dans intervale et stop         | Dans intervale et stop     | Ok             |
| Test limite  | 5, 10, 22, oui | Pas dans intervale et continue | Dans intervale et continue | Ok             |
| Test limite  | 5, 10, 2, non  | Pas dans intervale et stop     | Dans intervale et stop     | Ok             |
