#include <stdio.h>
#include <stdbool.h>
#include <cctype>

#include "stdcolor.h"
#include "displayC4.h"
#include "controlC4.h"

int main()
{
	char gameTab[ROW][COL], isContinue = 'Y', tokenPlayer;
	bool winner = false, endGame = false;
	int col, row;

	initGame(gameTab);

	int laps = 0;
	while (laps < (ROW * COL) && toupper(isContinue) == 'Y') {
		tokenPlayer = (laps % 2 == 0) ? TOKEN1 : TOKEN2;
		displayColor('Y');
		if (laps % 2 == 0) printf("\nTour: %d", (laps / 2) + 1);
		printf("\nJoueur %c a la main:", tokenPlayer);

		verifyCol(gameTab, tokenPlayer, &col);
		addTokenConnect4(gameTab, col, tokenPlayer, &row);
	
		displayPower4(gameTab);
		verifyConnect4(gameTab, col, row, tokenPlayer, &winner);
		if (winner) {
			displayColor('G');
			printf("Joueur %c gagne !", tokenPlayer);
			endGame = true;
		}
		if (!winner && laps == (ROW * COL) - 1) {
			printf("egalite");
			endGame = true;
		}

		if (endGame) {
			printf("\nVoulez-vous faire une autre partie de puissance 4 (Y/N)? ");
			scanf("%c", &isContinue);
			emptyBuffer();
			if (toupper(isContinue) == 'Y') {
				laps = -1;
				winner = false;
				endGame = false;
				initGame(gameTab);
			}
		}

		laps++;
	}
}