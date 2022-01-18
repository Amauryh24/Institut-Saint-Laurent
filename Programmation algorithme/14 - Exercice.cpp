// 14 - Exercice.cpp : Rotation
/*
	Étant doné un tableau d’entiers de taille déterminée. On demande à l’utilisateur d’introduire un
	nombre. Si le nombre est supérieur à la taille du tableau alors, cela doit être refusé. Quand un
	nombre correct est introduit, alors on demande à l’utilisateur s’il veut une rotation à gauche ou
	une rotation à droite.
*/

#include <stdio.h>

int shiftTab(int tab[], int shift) {
	int intTab[10] = {0};
	for (int i = 0; i < 10; i++)
		
	{
		if (i < shift) {
			intTab[i] = tab[10 - shift + i];
		}
		else {
			intTab[i] = tab[i - shift];
		}
		printf("%d ", intTab[i]);
	}
	return intTab[10];
}
int unshiftTab(int tab[], int unshift) {
	int intTab[10] = { 0 };
	for (int i = 0; i < 10; i++)
	{
		if (i < 10 - unshift) {
			intTab[i] = tab[i + unshift];
		}
		else {
			intTab[i] = tab[unshift + i - 10];
		}
		printf("%d ", intTab[i]);
	}
	return intTab[10];
}

void emptyBuffer()
{
	int c = 0;
	while (c != '\n' && c != EOF)
	{
		c = getchar();
	}
}

int main()
{
	int intTab1[10] = { 1, 5, 2 , 7, 8, 7, 9, 10, 9, 11 };	
	int nbrShift = 0, inputValid = 0;
	char direction;
	char response = 'Y';

	while ( response == 'Y' || response == 'y') {
		printf("\n********************************************\n");
		printf("Voici le tableau de depart:\n");
		for (int i = 0; i < 10; i++)
		{
			printf("%d ", intTab1[i]);
		}

		do {
			printf("\nIntroduire un nombre pour le decalage, de 1 à 10: ");
			inputValid = scanf("%d", &nbrShift);
			emptyBuffer();
		} while (inputValid != 1 || nbrShift <= 0 || nbrShift > 10);

		do {
			printf("Dans quel sens voulez-vous effectuer la rotation du tableau ? gauche(G) ou droite(D): ");
			inputValid = scanf("%c", &direction); // vérifier la saisie, return 0 ou 1
			emptyBuffer();
		} while (inputValid == 0 || (direction != 'G' && direction != 'g' && direction != 'D' && direction != 'd'));

		

		if (direction == 'G' || direction == 'g')
		{
			printf("Voici le nouveau tableau avec un decalage de %d par la gauche: \n", nbrShift);
			unshiftTab(intTab1, nbrShift);

		}
		else {
			printf("Voici le nouveau tableau avec un decalage de %d par la droite: \n", nbrShift);
			shiftTab(intTab1, nbrShift);
		}

		printf("\nVoulez-vous faire un autre decalage (Y/N)? ");
		inputValid = scanf("%1c", &response);
		emptyBuffer();
		//getchar();
		
	}
}

