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

void addTokenConnect4(char tab[ROW][COL], int choiceCOL, char choiceTOKEN) {
	for (int i = ROW; i >= 0; i--)
	{
		if (tab[i][choiceCOL - 1] == DEFAULTTOKEN) {
			tab[i][choiceCOL - 1] = choiceTOKEN;
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

int verifyCol(char tab[ROW][COL], char currentToken) {
	int isNumber, currentCol;
	do {
		displayColor('Y');
		printf("\nIntroduire un numero de colonne, de 1 a 7: ");
		isNumber = scanf("%d", &currentCol);
		emptyBuffer();
	} while (isNumber != 1 || currentCol <= 0 || currentCol > 7);

	if (tab[0][currentCol - 1] == TOKEN1 || tab[0][currentCol - 1] == TOKEN2) {
		displayColor('R');
		printf("La colonne %d est pleine !", currentCol);
		return verifyCol(tab, currentToken);
	}
	return currentCol;
}

bool verifyConnect4(char tab[ROW][COL], char token) {
	int  maxToken = 4;
	bool status = false;

	// horizontal
	for (int i = 0; i < ROW; i++)
	{
		for (int j = 0; j < (COL - maxToken + 1); j++)
		{
			if (tab[i][j] == token && tab[i][j + 1] == token && tab[i][j + 2] == token && tab[i][j + 3] == token) {
				status = true;
			}
		}
	}

	// vertical
	for (int i = ROW; i >= (ROW - maxToken + 1); i--)
	{
		for (int j = 0; j < COL; j++) {
			if (tab[i][j] == token && tab[i - 1][j] == token && tab[i - 2][j] == token && tab[i - 3][j] == token) {
				status = true;
			}
		}
	}
	// diagonal bas-gauche -> haut-droite
	for (int i = ROW; i >= (ROW - maxToken + 1); i--)
	{
		for (int j = 0; j < (COL - maxToken + 1); j++) {
			if (tab[i][j] == token && tab[i - 1][j + 1] == token && tab[i - 2][j + 2] == token && tab[i - 3][j + 3] == token) {
				status = true;
			}
		}
	}

	// diagonal bas-droite -> haut-gauche
	for (int i = ROW; i >= (ROW - maxToken + 1); i--)
	{
		for (int j = COL; j >= (COL - maxToken + 1); j--) {
			if (tab[i][j] == token && tab[i - 1][j - 1] == token && tab[i - 2][j - 2] == token && tab[i - 3][j - 3] == token) {
				status = true;
			}
		}
	}
	return status;
}