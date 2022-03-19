#define ROW 6
#define COL 7
#define TOKEN1 ('X')
#define TOKEN2 ('O')

#include "stdcolor.h"
#include <stdio.h>

void displayPower4(char tab[ROW][COL]) {
	displayColor('C');
	for (int i = 0; i < ROW; i++)
	{
		if (i == 0) {
			printf("  1   2   3   4   5   6   7  \n");
			printf("+---+---+---+---+---+---+---+\n");
		}
		else {
			printf("+---+---+---+---+---+---+---+\n");
		}
		for (int j = 0; j < COL; j++)
		{
			displayColor('C');
			printf("| ");
			if (tab[i][j] == TOKEN1) displayColor('G');
			if (tab[i][j] == TOKEN2) displayColor('P');
			printf("%c ", tab[i][j]);
			if (j == COL - 1) {
				displayColor('C');
				printf("|");
			}
		}
		printf("\n");
		if (i == ROW - 1) {
			printf("+---+---+---+---+---+---+---+\n");
			printf("  1   2   3   4   5   6   7  \n");
		}
	}
}