# Exercice 5_4_3: Compter le nombre de valeurs paires et impaires

Étant donné un tableau à deux dimensions, il s’agit de compter le nombre de valeurs entières
paires et le nombre de valeurs impaires.

Que faut-il changer pour faire le même exercice mais avec un tableau à trois dimensions.

Écrire les tests nécessaires de cet algorithme.

## Variables

- matrice[7][2][5]: Tableau à 3 dimensions
- totPaires: Total des nombres paires.
- totImpaires: Total des nombres impaires
- i,j,k: Index du tableau

## Algorithme

```
// Initialisation
totPaires = 0
totImpaires = 0

//Début
i = 0
while (i < 7)
    if (matrice[i] % 2 == 0)
        then totPaires = totPaires + 1
        else totImpaires = totImpaires + 1
    endif
    j = 0
    while(j < 2)
        if (matrice[i][j] % 2 == 0)
            then totPaires = totPaires + 1
            else totImpaires = totImpaires + 1
        endif
        k = 0
        while(k < 5)
            if (matrice[i][j][k] % 2 == 0)
                then totPaires = totPaires + 1
                else totImpaires = totImpaires + 1
            endif
            k = k + 1
        end while
        j = j + 1
    end while
    i = i + 1
end while

écrire("le nombre total de nombres paires est de:", totPaires)
écrire("le nombre total de nombres impaires est de:", totImpaires)
//Fin
```

## phase de test

| Description                                       | Données                              | Résultat attendu | Résultat obtenu | Status du test |
| ------------------------------------------------- | ------------------------------------ | ---------------- | --------------- | -------------- |
| nombre de valeur paire dans un tab à 3 dimensions | [3,4,6,7,8,9,10], [2,3], [4,5,6,7,8] | 8 paires         | 8 paires        | ok             |
|                                                   | [0,0,0,0,1,1,2], [2,3], [4,5,6,7,8]  | 9 paires         | 9 paires        | ok             |
