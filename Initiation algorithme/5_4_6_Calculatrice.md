# Exercice 5_4_6: Calculatrice

Écrire un Algorithme qui permet à l’utilisateur d’introduire :

- Deux opérandes
- Un opérateur parmi ceux-ci : \* / + -

Après la saisie de ces données, il faut afficher le résultat.
Permettre à l’utilisateur de procéder à plusieurs calculs.

## Variables

- operator: Opérateur +, -, \*, /
- operant1: opérande 1
- operant2: opérande 2
- result: le résultat attendu à afficher
- response: Réponse entrée par l'utilisateur
- noDivide: Booleen qui vérifie si l'utilisateur à divisé par 0
- isBegin: Booleen si l'utilisateur commence ou continue l'utilisation de la calculatrice.

## Algorithme

```
//Initialisation
écrire("voulez-vous utiliser la calculatrice? oui/non")
lire(response)

// Début
isBegin = true
while(response == 'oui')
    if(isBegin)
        then
            écrire("entrée la première opérande")
            lire(operant1)
        else  operant1 = result
    endif

    écrire("Quelle opération voulez-vous effectuer? -,+,*,/")
    lire(operator)
        while (operator <> '-' and operator <> '+' and operator <> '/' and operator <> '/' )
            écrire("Veuillez mettre un opérateur valide -,+,*,/")
            lire(operator)
        end while
    écrire("entrée votre opérande")
    lire(operant2)

    if (operator === '-')
        then result = operant1 - operant2
    endif
    if (operator === '+')
        then result = operant1 + operant2
    endif
    if (operator === '*')
        if (operant1 === 0 or operant2 === 0)
            then result = 0
            else result = operant1 * operant2
        endif
    endif
    if (operator === '/')
        if (operant1 === 0)
            then result = 0
        endif
        if (operant2 === 0)
            then noDivide = true
            else result = operant1 / operant2
        endif
    endif

    if (noDivide)
        then
            écrire("Nous ne pouvons pas diviser par zéro")
            écrire("Voulez-vous de nouveau utiliser la calculatrice? oui/non")
            lire(response)
            isBegin = true
        else
            écrire("le résultat de ", operant1," ", operator, " ", operant2, " = ", result)
            écrire("voulez-vous effectuer une opération depuis ce résultat? oui/non)
            lire(response)
            if (response === 'oui')
                then isBegin = false
                else
                    écrire("Voulez-vous de nouveau utiliser la calculatrice? oui/non")
                    lire(response)
                    isBegin = true
            endif
    endif
end while
// Fin
```

## phase de test

| Desscription | Données | Résultat attendu | Résultat obtenu | Status du test |
| ------------ | ------- | ---------------- | --------------- | -------------- |
| Cas général  | 4\*0    | 0                | 0               | Ok             |
| test limite  | 0/ 0    | non défini       | non défini      | Ok             |
