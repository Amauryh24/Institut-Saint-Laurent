# Exercice 5_4_8: Comptage de lettres

Il s’agit d’écrire un algorithme permettant de lire une phrase à l’écran. Cette phrase ayant une longueur maximale de 100 caractères et se termine par un point ou un point d’interrogation ou un point d’exclamation.
Lorsque la phrase a été introduite, il s’agit de compter le nombre d’apparition de chaque voyelle de l’alphabet.
Pour résoudre ce problème, je vous propose de réaliser les sous-algorithmes suivants :

1. Un sous-algorithme me permettant de lire une phrase à l’écran virtuel de maximum 100 caractères
2. Un sous-algorithme qui compte le nombre de voyelles dans une phrase de maximum 100 caractères

## Variables

- phraseTab[100]: Tableau qui contient une phrase de 100 caractères maximum
- currentLetter: la lettre courante entrée par l'utilisateur
- response: Réponse entrée par l'utilisateur
- i: index du tableau

## Algorithme

```
// Initialisation
écrire("voulez-vous introduire une phrase lettre par lettre? La phrase se termine par un point, un point d'interrogation ou d'exclamation. (oui/non)")
lire(response)

// Début
i = 0
while (response == 'oui' && i < 100 )
    écrire("Entrer une lettre")
    lire(currentLetter)
    if (currentLetter == '.' || currentLetter == '?' ||currentLetter == '!')
        then
            phraseTab[i] = currentLetter
            phraseTab[i + 1] = '\0'
            response = 'non'
        else phraseTab[i] = currentLetter
    end if
    //vérifier si la phrase se termine à 100 avec une ponctuation
    ...
    //
    i = i + 1

end while

call readSentence(phraseTab, i)
call countVowel(phraseTab, i)

// Fin
```

#### sous algorithme 1

```
//début sous algorithme readSentence
    // Paramètre input:
    // array: Tableau de caractère
    // size: Taille de mon tableau

    readSentence(array, size)
    // Paramètre output
    // j:jndex
    // sentence: la phrase à afficher
    j = 0
    while (j < size)
        sentence = sentence + array[j]
        j = j + 1
    end while
    écrire("La phrase à l’écran virtuel", sentence );
//fin sous-algorithme

```

#### sous algorithme 2

```
//début sous algorithme countVowel
    // Paramètre input:
    // array: Tableau de caractère
    // size: Taille de mon tableau

    // Paramètre output
    // j:index
    // countVowel: le nombre de voyelles
    j = 0
    while (j < size)
        if (array[j] == 'a' || array[j] == 'e' || array[i] == 'j', || array[j] == 'o'|| array[j] == 'u' || array[j] == 'y')
            then countVowel = countVowel + 1
        end if
        j = j + 1
    end while
    écrire("Le nombre de voyelle dans la phrase est de: ", countVowel );
//fin sous-algorithme
```
