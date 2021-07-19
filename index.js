const readlineSync = require('readline-sync');

// set up board info
const boardInfo = {
    num_of_cols: 0,
    num_of_rows: 0,
    piece_position_col: 0,
    piece_position_row: 0,
    direction : 'right'
}

// get columns and rows
function createBoard(num_of_cols, num_of_rows){

}

function print_board_string(board) {
    let board_string = '';
    for(let i = 0; i < board.num_of_rows; i++){
        for(let j = 0; j < board.num_of_cols; j++){
            if(board.piece_position_row == i && board.piece_position_col == j){
                board_string = board_string + 'X';
            }
            else {
                board_string = board_string + '-';
            }
        }
        board_string += "\n";
    }
    
    return board_string;
}

function movePieceForward(board) {
    board.piece_position_col = board.piece_position_col + 1;
    board.piece_position_row = board.piece_position_row + 1;
    return board;
}

function isAtEdge(board){
    if(board.direction == 'right' && board.piece_position_col == (board.num_of_cols - 1)) {
        return true;
    }

    if(board.direction == 'left' && board.piece_position_col == 0) {
        return true;
    }
    
    return false;
}

function hasReachedEndOfBoard(board)
{
    if(board.piece_position_row == (board.num_of_rows - 1)){
        return true;
    }

    return false;
}

function startMove(){
    
    //get columns and rows
    //print board
    //get position of piece
    //in a loop
        //check if user is at the top, if yes: endGame
        //if no, ask to move forward
        //move piece forward
        //(update piece position)
        // print board
}

module.exports = { print_board_string, isAtEdge, hasReachedEndOfBoard, movePieceForward };