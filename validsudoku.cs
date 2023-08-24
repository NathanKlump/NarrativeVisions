public class Solution {
    public bool IsValidSudoku(char[][] board) {
        // Initialize dictionaries to hold HashSets for each row, column, and 3x3 square
        var rows = new Dictionary<int, HashSet<char>>();        
        var cols = new Dictionary<int, HashSet<char>>();
        var squares = new Dictionary<(int, int), HashSet<char>>();
        

        // Iterate over each row
        for(var x = 0; x < 9; x++) {
            rows[x] = new HashSet<char>();

        
            // Iterate over each column
            for(var y = 0; y < 9; y++) {

                // Initialize HashSet for the current column if it doesn't already exist
                if(!cols.ContainsKey(y)) cols[y] = new HashSet<char>();
                
                // Initialize HashSet for the current 3x3 square if it doesn't already exist
                if(!squares.ContainsKey((x/3, y/3))) 
                    squares[(x/3, y/3)] = new HashSet<char>();
                
                // Skip the current cell if it's empty
                if(board[x][y] == '.') continue;
                
                // Check if the current cell's value already exists in the current row, column, or 3x3 square
                // If it does, return false to indicate the Sudoku board is not valid
                if(rows[x].Contains(board[x][y]) ||
                  cols[y].Contains(board[x][y]) || 
                  squares[(x / 3, y / 3)].Contains(board[x][y]))
                   return false;
                
                // Add the current cell's value to the HashSets of the current row, column, and 3x3 square
                rows[x].Add(board[x][y]);
                cols[y].Add(board[x][y]);
                squares[(x / 3, y / 3)].Add(board[x][y]);
            }
        }
        
        // If no duplicates have been found in any row, column, or 3x3 square, return true to indicate the Sudoku board is valid
        return true;
    }
}
