# Exercice 5_4_10: Affichage en lignes et colonnes

Étant donné le contenu d’un tableau d’une certaine dimension (plus de 100 valeurs) et de type
entier, il s’agit d’afficher toutes les valeurs de ce tableau en faisant en sorte qu’il ne peut y avoir
que trois valeurs par ligne et il doit y avoir une ligne blanche après 25 lignes. La ligne blanche
ne doit être affichée que s’il y a une ligne qui suit.
Le tableau devra être inaitlisé par une lecture écran et le nombre de valeurs introduites peut être
inférieure à la taille du tableau.
Faire les tests nécessaires.
Essayer de le faire sans utiliser l’opérateur Modulo.

## Algorithme

Partie avec Modulo

### Variables

```
tabInteger[125]: tableau d'entier de taille 125
tabCurrent[]: tableau courrant rempli par l'utilisateur
lenghtTabCurrent:nombre de valeur entré par l'utilisateur dans le tableau courrant
currenValue: Valeur courante entrée par l'utilisateur
ligne: Le saut de ligne
i: index de mon tableau
response: Réponse entrée par l'utilisateur
```

### Initialisation

```
écrire("Voulez-vous remplir un tableau de nombre entier, oui/non")
lire(response)
i = 0
lenghtTabCurrent = 0
```

```
while(response == 'oui and i < 125)
    écrire("Encoder un nombre entier")
    lire(currenValue)
    tabCurrent[i] = currentValue
    i = i + 1
    lenghtTabCurrent = lenghtTabCurrent + 1
    écrire("Voulez-vous encoder un autre nombre entier, oui/non")
    lire(response)
end while

ligne = 0
i = 0
while (i < lenghtTabCurrent)
    écrire(tabCurrent[i]," ", tabCurrent[i+ 1]," ", tabCurrent[i+2], "\n")
    i = i + 3
    ligne = ligne + 1
    if (ligne % 25 == 0 and i < lenghtTabCurrent)
        then écrire("\n\n")
    endif
end while
```

## Algorithme

Partie sans Modulo

### Variables

```
tabInteger[125]: tableau d'entier de taille 125
tabCurrent[]: tableau courrant rempli par l'utilisateur
lenghtTabCurrent:nombre de valeur entré par l'utilisateur dans le tableau courrant
currenValue: Valeur courante entrée par l'utilisateur
ligne: Le saut de ligne
i: index de mon tableau
response: Réponse entrée par l'utilisateur

```

### Initialisation

```
écrire("Voulez-vous remplir un tableau de nombre entier, oui/non")
lire(response)
```

```
i = 0
lenghtTabCurrent = 0
while(response == 'oui and i < 125)
    écrire("Encoder un nombre entier")
    lire(currenValue)
    tabCurrent[i] = currentValue
    i = i + 1
    lenghtTabCurrent = lenghtTabCurrent + 1
    écrire("Voulez-vous encoder un autre nombre entier, oui/non")
    lire(response)
end while

i = O
ligne = 0
quotient = 1
while (i < lenghtTabCurrent)
    écrire(tabCurrent[i]," ", tabCurrent[i+ 1]," ", tabCurrent[i+2], "\n")
    i = i + 3
    ligne = ligne + 1
    if (ligne - 25 == 0 and i < lenghtTabCurrent)
        then
            écrire("\n\n")
            ligne = 0
    endif
end while
```
