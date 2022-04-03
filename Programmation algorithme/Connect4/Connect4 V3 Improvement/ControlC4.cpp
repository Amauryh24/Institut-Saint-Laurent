#include <stdio.h>
#include <string.h>
#include "stdcolor.h"
#include "controlC4.h"
#include "displayC4.h"

#define ROW 6
#define COL 7
#define DEFAULTTOKEN '.'
#define TOKEN1 'X'
#define TOKEN2 'O'

void initGame(char tab[ROW][COL]) {
	displayColor('Y');
	printf("Puissance 4");
	printf("\nEntrez le numero de colonne pour jouer votre coups!\n\n");
	initConnect4(tab);
	displayPower4(tab);
}

void initConnect4(char tab[ROW][COL]) {
	for (int i = 0; i < ROW; i++)
	{
		for (int j = 0; j < COL; j++)
		{
			tab[i][j] = DEFAULTTOKEN;
		}
	}
}

void addTokenConnect4(char tab[ROW][COL], int choiceCOL, char choiceTOKEN,int *pRow) {
	for (int i = ROW; i >= 0; i--)
	{
		if (tab[i][choiceCOL - 1] == DEFAULTTOKEN) {
			tab[i][choiceCOL - 1] = choiceTOKEN;
			*pRow = i + 1;
			i = -1;
		}
	}
}

void emptyBuffer()
{
	int c = 0;
	while (c != '\n' && c != EOF)
	{
		c = getchar();
	}
}

void verifyCol(char tab[ROW][COL], char currentToken, int* pCurrentCol) {
	int isNumber;
	do {
		displayColor('Y');
		printf("\nIntroduire un numero de colonne, de 1 a 7: ");
		isNumber = scanf("%d", pCurrentCol);
		emptyBuffer();
	} while (isNumber != 1 || *pCurrentCol <= 0 || *pCurrentCol > 7);

	if (tab[0][*pCurrentCol - 1] == TOKEN1 || tab[0][*pCurrentCol - 1] == TOKEN2) {
		displayColor('R');
		printf("La colonne %d est pleine !", *pCurrentCol);
		verifyCol(tab, currentToken, pCurrentCol);
	}
}

void verifyConnect4(char tab[ROW][COL], int col, int row, char token, bool* pStatus) {
	int iCol = col - 1, iRow = row - 1;
	int  maxToken = 4;

	// horizontal
	for (int j = 0; j < (COL - maxToken + 1); j++)
	{
		if (tab[iRow][j] == token && tab[iRow][j + 1] == token && tab[iRow][j + 2] == token && tab[iRow][j + 3] == token) {
			*pStatus = true;
		}
	}

	// vertical
	if (tab[iRow][iCol] == token && tab[iRow + 1][iCol] == token && tab[iRow + 2][iCol] == token && tab[iRow + 3][iCol] == token) {
		*pStatus = true;
	}

	// diagonal haut-gauche -> bas-droite
	if (tab[iRow][iCol] == token && tab[iRow + 1][iCol + 1] == token && tab[iRow + 2][iCol + 2] == token && tab[iRow + 3][iCol + 3] == token) {
		*pStatus = true;
	}

	// diagonal haut-droite -> bas-gauche
	if (tab[iRow][iCol] == token && tab[iRow + 1][iCol - 1] == token && tab[iRow + 2][iCol - 2] == token && tab[iRow + 3][iCol - 3] == token) {
		*pStatus = true;
	}

}