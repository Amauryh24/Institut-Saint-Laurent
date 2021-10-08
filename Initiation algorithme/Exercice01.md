# Exercice 01: Vérification d'un date valide

écrire le speudo code pour vérifier si une date est valide ou non et si elle est bissextile

### Variables

```
jour: jour de la date
mois: Mois de la date
annee: Année de la date
ISBessextile: Indique si oui ou non une date est bissextile
ISCorrecte: Indique si oui ou non une date est correcte
```

### Initialisation

```
écrire("Veuillez introduire l'année de la date?")
lire(annee)
écrire("Veuillez introduire le mois de la date?")
lire(mois)
écrire("Veuillez introduire le jour de la date?")
lire(jour)
```

### Algorithme

```
if (annee mod 4 == 0 and annee mod 100 not = 0) or (annee mod 400 == 0)
    then ISBessextile = vrai
end if

if (mois == 1 or mois == 3 or mois == 5 or mois == 7 or mois == 8 or mois == 10 or mois == 12) and (jour > 0 and jour <= 31)
    then ISCorrecte = vrai
end if

if (mois == 4 or mois == 6 or mois == 9 or mois == 11) and (jour > 0 and jour <= 30)
    then ISCorrecte = vrai
end if

if (ISBessextile == vrai and mois == 2)
   then ISCorrecte = VRAI
end if

if (ISCorrecte == vrai)
    then écrire("la date introduite est correcte")
    else écrire("la date introduite est incorrecte")
end if
```

## phase de test

| Desscription | Données         | Résultat attendu | Résultat obtenu | Status du test |
| ------------ | --------------- | ---------------- | --------------- | -------------- |
| Cas général  | 5 mars 2013     | Date Valide      | Date Valide     | Ok             |
| Test limite  | 12 février 2015 |
