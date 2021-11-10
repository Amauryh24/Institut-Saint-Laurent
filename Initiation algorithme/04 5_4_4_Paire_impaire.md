# Exercice 5_4_3: Compter le nombre de valeurs paires et impaires

Étant donné un tableau à deux dimensions, il s’agit de compter le nombre de valeurs entières
paires et le nombre de valeurs impaires.

Que faut-il changer pour faire le même exercice mais avec un tableau à trois dimensions.

Écrire les tests nécessaires de cet algorithme.

### Variables

```
matrice[7][2][5]: Tableau à 3 dimensions
totPaires: Total des nombres paires.
totImpaires: Total des nombres impaires
i:Index du tableau
j:Index du tableau
k:Index du tableau
```

### Initialisation

```
totPaires = 0
totImpaires = 0
```

### Algorithme

```
i = 0
while (i < 7)
    j = 0
    while(j < 2)
        k = 0
        while(k < 5)
            if (matrice[i][j][k] % 2 == 0)
                then totPaires = totPaires + 1
                else totImpaires = totImpaires + 1
        end while
        endif
    j = j + 1
    end while
    i = i + 1
end while

écrire("le nombre total de nombres paires est de:", totPaires)
écrire("le nombre total de nombres impaires est de:", totImpaires)

```

## phase de test

| Desscription           | Données                      | Résultat attendu             | Résultat obtenu              | Status du test |
| ---------------------- | ---------------------------- | ---------------------------- | ---------------------------- | -------------- |
| Pour une valeur        | 45,-5,65,22,2,0,4 & 45       | 45 est dans le tableau       | 45 est dans le tableau       | ok             |
| Pour plusieurs valeurs | 45,-5,65,22,2,0,4 & 45,11,22 | 45 et 22 est dans le tableau | 45 et 22 est dans le tableau | ok             |
