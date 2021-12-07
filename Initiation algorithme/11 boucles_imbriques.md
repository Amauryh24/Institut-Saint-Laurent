# Exercice tableau imbriqués

Pour une année choisie par l’utilisateur, vous devez utiliser :

- Un sous-algorithme permettant l’initialisation d’un tableau pour stocker la température maximale et minimale de chaque jour de l’année, il faut juste l’utiliser et ne pas l’écrire (il faut juste bien décider les paramètre nécessaire à cet algorithme)

- Un sous-algorithme pour déterminer si une année est bissextile ou non. Il faut juste l’utiliser et ne pas l’écrire (il faut juste bien décider les paramètre nécessaire à cet algorithme)

L’algorithme consiste à afficher la température moyenne pour chaque mois et pour une année choisie par l’utilisateur.

## Variables

- monthAverage : la moyenne à afficher pour chaque mois et pour une année choisie
- dayAverage : la moyenne du jour
- year : année rentré par l'utilisateur
- mois : nombre de mois
- jourMAx : nombre de jour maximum
- tabTemp[12][31][2] : mon tableau de temperature, donner la description .....

## Algorithme

```
//initialisation
mois = 12
dayAverage = 0
monthAverage = 0
call initTempMaxMin(tab)

écrire("entrez une année pour afficher sa température moyenne)
lire(year)

call isBissextile(year,jourMAx)
//début
//attention vérifier les autres mois, ici seuelment le mois de février est renvoyé
i = 0
while i < mois
    j = 0
        while j < jourMAx
            k = 0
                while k < 2
                dayAverage = dayAverage + tabTemp[i][j][k]
                k = k + 1
                end while

        dayAverage = dayAverage / 2
        monthAverage = monthAverage + dayAverage
        j = j + 1
        end while

    i = i + 1
    monthAverage = monthAverage / jourMAx
    écrire("la moyenne du mois", i + 1, " pour l'année", year ,"est de", monthAverage)
end while

//fin
```
