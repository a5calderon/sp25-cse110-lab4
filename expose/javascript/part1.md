1. Line 9 prints 20.
2. Line 13 also prints 20.
3. From this, I see that using "var" saves a value for the entire function, not just the current block. Having variables acessible outside of the block it was defined in can cause unexpected errors.
4. Line 9 prints 20.
5. This returns an error because "result" was defined and declared in the in if block. The else section cannot access that variable from the previous block. 
6. Line 9 returns an error because it attempts to reassign "result", but because this variable is a const, it cannot reassign. 
7. Techinically, the program stops running before it reaches this because of question 6, but if I were to pretend line 7 was not in this code snippet, then the program returns an error because "result" is not defined in the else block. 