# Exercice 5_4_6: Calculatrice

Écrire un Algorithme qui permet à l’utilisateur d’introduire :

- Deux opérandes
- Un opérateur parmi ceux-ci : \* / + -

Après la saisie de ces données, il faut afficher le résultat.
Permettre à l’utilisateur de procéder à plusieurs calculs.

## Algorithme

### Variables

```
operator: Opérateur +, -, *, /
operant1: opérande 1
operant2: opérande 2
result: le résultat attendu à afficher
response: Réponse entrée par l'utilisateur
noDivide: Booleen qui vérifie si l'utilisateur à divisé par 0
isContinue: Booleen si l'utilisateur continue avec le résultat obtenu.
```

### Initialisation

```
écrire("voulez-vous utiliser la calculatrice? oui/non")
lire(response)

isContinue = false
while(response == 'oui')
    if(isContinue)
        then operant1 = result
        else
            écrire("entrée la première opérande")
            lire(operant1)
    endif

    écrire("Quelle opération voulez-vous effectuer? -,+,*,/")
    lire(operator)
        while (operator <> '-' and operator <> '+' and operator <> '/' and operator <> '/' )
            écrire("Veuillez mettre un opérateur valide -,+,*,/")
            lire(operator)
        end while
    écrire("entrée votre opérande")
    lire(operant2)

    if (operator == '-')
        then result = operant1 - operant2
    endif
    if (operator == '+')
        then result = operant1 + operant2
    endif
    if (operator == '*')
        if (operant1 == 0 or operant2 == 0)
            then result = 0
            else result = operant1 * operant2
        endif
    endif
    if (operator == '/')
        if ( operant2 == 0)
            then noDivide = true
            else result = operant1 / operant2
        endif
    endif

    if (noDivide)
        then
            noDivide = false
            isContinue = false
            écrire("Nous ne pouvons pas diviser par zéro")
            écrire(\n)
            écrire("Voulez-vous de nouveau utiliser la calculatrice? oui/non")
            lire(response)
        else
            écrire("le résultat de", operant1," ", operator, " ", operant2, "=", result)
            écrire("voulez-vous effectuer une opération depuis ce résultat? oui/non)
            if (response == 'oui')
                then isContinue = true
                else
                    isContinue = false
                    écrire("Voulez-vous de nouveau utiliser la calculatrice? oui/non")
                    lire(response)
            endif
    endif

end while
```
