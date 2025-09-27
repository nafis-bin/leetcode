class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // brute force

        // checking for rows
        let hashMap = {}
        for (let i = 0; i < board.length; i++) {
            hashMap = {}
            for (let j = 0; j < board[i].length; j++) {
				if (board[i][j] === ".") continue

                if (hashMap[board[i][j]]) {
                    return false
                }
                hashMap[board[i][j]] = true
            }
        }

        // checking for columns
        for (let i = 0; i < board.length; i++) {
            hashMap = {}
            for (let j = 0; j < board[i].length; j++) {
				if (board[j][i] === ".") continue

                if (hashMap[board[j][i]]) {
                    return false
                }
                hashMap[board[j][i]] = true
            }
        }


		for (let boxRow = 0; boxRow < 3; boxRow++) {
			for (let boxCol = 0; boxCol < 3; boxCol++) {
				let boxSet = {}

				for (let i = 0; i < 3; i++) {
					for (let j = 0; j < 3; j++) {
						let row = boxRow * 3 + i
						let col = boxCol * 3 + j

						if (board[row][col] === ".") continue

						if (boxSet[board[row][col]]) return false

						boxSet[board[row][col]] = true
					}
				}
			}
		}
        
        return true
    }
}

let board = [["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]


let s = new Solution()

console.log(s.isValidSudoku(board))
