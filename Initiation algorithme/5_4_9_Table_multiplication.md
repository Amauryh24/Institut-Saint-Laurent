# Exercice 5_4_9: Table de multiplication

Avec cet Algorithme, il est demandé d’afficher la table de multiplication d’un chiffre.

L’utilisateur doit introduire un chiffre. Il faut contrôler que c’est bien un chiffre : de 1 à 9. Quand
le chiffre est correct, il faut afficher :
1 \* chiffre
2 \* chiffre
...
...
9 \* chiffre

## Algorithme

### Variables

```
chiffre: chiffre entrée par l'utilisateur
produit: résultat obtenu de la multiplication
facteurX: multiplicateur
```

### Initialisation

```
écrire("Entrer un chiffre entre 1 et 9");
lire(chiffre)
while(chiffre < 1 or chiffre > 9 )
    écrire("Entrer un chiffre entre 1 et 9");
    lire(chiffre)
end while
```

```
facteurX = 1
while(facteurX < 10)
    produit = facteurX * chiffre;
    écrire(facteurX, "x", chiffre,"=", produit)
    écrire("\n")
    facteurX = facteurX + 1
end while
```
