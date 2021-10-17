# Exercice 5_4_8: Compter les lettres

Écrivez un programme qui demande à l’utilisateur de taper une phrase, puis qui affiche le nombre
de « e » qu’il y a dans celle-ci. Une phrase se termine toujours par un point « . », un point
d’exclamation « ! » ou un point d’interrogation « ? ». Pour effectuer cet exercice, il sera
indispensable de lire la phrase caractère par caractère.

Faire un sous-algorithme permettant de lire un ensemble de carcatères et un autre permettant de
compter le nombre de « e » dans la phrase introduite.

Variante : comptage de toutes les voyelles avec un total par voyelle.

## Algorithme

### Variables

```
phrase: phrase entrée par l'utilisateur
longueurPhrase: Longueur de ma phrase
totalVoyellesA: Total de (a) dans la phrase
totalVoyellesE: Total de (e) dans la phrase
totalVoyellesI: Total de (i) dans la phrase
totalVoyellesO: Total de (o) dans la phrase
totalVoyellesU: Total de (u) dans la phrase
totalVoyelles: Nombre total de voyelles
```

### Initialisation

```
do
    écrire("Entrez une phrase")
    lire(phrase)
    longueurPhrase = strlen(phrase)
while()
```

```
while(response == 'oui')
écrire("Veuillez entrer le premier nombre entier")
lire(nbr1)
écrire("Veuillez entrer le second nombre entier")
lire(nbr2)

a = nbr1
b = nbr2
reste = 1

while (reste <> 0)
    if (a < b)
        then
            temp = a
            a = b
            b = temp
    endif
    reste = a - b
    a = b
    b = reste
    if (reste == 1)
        then
            PGCD = 1
            reste = 0
    endif

    if (reste > 1)
        then PGCD = b
    endif
end while

écrire("le PGCD de", nbr1, "et", nbr2,"est un diviseur de:", PGCD )
écrire("Voulez-vous rechercher un PGCD de deux nombre entier?" )
lire(response)
```
