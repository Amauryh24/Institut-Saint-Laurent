#define ROW 6
#define COL 7
#define DEFAULTTOKEN ('.')
#define TOKEN1 ('X')
#define TOKEN2 ('O')
void initGame(char tab[ROW][COL]);
void initConnect4(char tab[ROW][COL]);
void addTokenConnect4(char tab[ROW][COL], int choiceCOL, char choiceTOKEN, int *pRow);
void emptyBuffer();
void verifyCol(char tab[ROW][COL], char currentToken, int* pcurrentCol);
void verifyConnect4(char tab[ROW][COL], int col, int row, char token, bool* pStatus);