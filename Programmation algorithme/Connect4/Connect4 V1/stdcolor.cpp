#include <stdio.h>

void displayColor(char choice) {
	if (choice == 'R') printf("\033[1;31m"); // Red
	if (choice == 'G') printf("\033[0;32m"); // Green
	if (choice == 'Y') printf("\033[1;33m"); // Yellow
	if (choice == 'B') printf("\033[0;34m"); // Blue
	if (choice == 'P') printf("\033[0;35m"); // Purple
	if (choice == 'C') printf("\033[0;36m"); // Cyan	
	if (choice == 'W') printf("\033[0;37m"); // White
}