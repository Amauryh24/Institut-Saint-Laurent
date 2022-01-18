// 08 - Exercice.cpp : Ce fichier contient la fonction 'main'. L'exécution du programme commence et se termine à cet endroit.
//

#include <stdio.h>

int cpt_vowels(char carac, char minVowel, char majVowel, int cptVowel) {
    int cpt = cptVowel;
    if (carac == minVowel or carac == majVowel) {
        return cpt = cpt + 1;
    }
    else {
        return cpt;
    }
}

int display_graphic_vowels(char vowel, int cptVowel) {
    printf("%c : ", vowel);
    int i = 0;
    while (i < cptVowel) {
        printf("-");
        i++;
    }
    printf(" %d\n", cptVowel);
    return 0;
}

int main()
{
    char stringOfCarac;
    int vowelA = 0, vowelE = 0, vowelI = 0, vowelO = 0, vowelU = 0, vowelY = 0;
    char response = 'Y';
    while (response == 'Y')
    {
        printf("Entrer une phrase: ");
        stringOfCarac = getchar();

        while (stringOfCarac != '\n') {
            vowelA = cpt_vowels(stringOfCarac, 'a', 'A', vowelA);
            vowelE = cpt_vowels(stringOfCarac, 'e', 'E', vowelE);
            vowelI = cpt_vowels(stringOfCarac, 'i', 'I', vowelI);
            vowelO = cpt_vowels(stringOfCarac, 'o', 'O', vowelO);
            vowelU = cpt_vowels(stringOfCarac, 'u', 'U', vowelU);
            vowelY = cpt_vowels(stringOfCarac, 'y', 'Y', vowelY);
            stringOfCarac = getchar();
        }
        printf("Nombre de voyelles sous forme graphique\n");
        display_graphic_vowels('A', vowelA);
        display_graphic_vowels('E', vowelE);
        display_graphic_vowels('I', vowelI);
        display_graphic_vowels('O', vowelO);
        display_graphic_vowels('U', vowelU);
        display_graphic_vowels('Y', vowelY);

        printf("Voulez-vous entrer une autre phrase (Y/N) ? ");
        scanf("%c", &response);
        getchar();
    }
}
