const readlineSync = require('readline-sync');

// set up board info
let boardInfo = {
    num_of_cols: 0,
    num_of_rows: 0,
    piece_position_col: 0,
    piece_position_row: 0,
    direction : 'right'
}

function printBoardString(board) {
    let board_string = '';
    let char = 'O'
    let even = board.num_of_cols % 2 == 0;
    for(let i = 0; i < board.num_of_rows; i++){
        for(let j = 0; j < board.num_of_cols; j++){
            if(board.piece_position_row == i && board.piece_position_col == j){
                board_string = board_string + '-';
            }
            else {
                board_string = board_string + char;
            }

            if(char == 'X'){
                char = 'O'
            } else{
                char = "X"
            }

        }
        board_string += "\n";
        if(even) {
            if(char == 'X'){
                char = 'O'
            } else{
                char = "X"
            }
        }
    }
    return board_string;
}

function movePieceForward(board) {
    if(board.direction == 'right'){
        board.piece_position_col = board.piece_position_col + 1;
    }
    else{
        board.piece_position_col = board.piece_position_col - 1;
    }

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

function changeDirection(board){
    if(board.direction == 'left'){
        board.direction = 'right'
    } else {
        board.direction = 'left'
    }
    return board;
}

function startMove(){
    //get columns and rows
    const rows = readlineSync.question('How many rows? ');
    const columns = readlineSync.question('How many columns? ');
    
    //create board with rows and columns
    boardInfo.num_of_rows = rows;
    boardInfo.num_of_cols = columns;

    //get position of piece
    let position = Math.floor(Math.random() * columns);
    boardInfo.piece_position_col = position;
    console.log(boardInfo.piece_position_col)
    console.log(printBoardString(boardInfo));
    //in a loop
    while(true){
        //check if user is at the top, if yes: endGame
        if(hasReachedEndOfBoard(boardInfo)){
            break;
        }
        const moveForward = readlineSync.question("continue? ");
        if (moveForward == "yes"){
            if(isAtEdge(boardInfo)){
                boardInfo = changeDirection(boardInfo);
            }
            boardInfo = movePieceForward(boardInfo);
        } else{
            break;
        }

        console.log(printBoardString(boardInfo));
    }     
}

module.exports = { printBoardString, isAtEdge, hasReachedEndOfBoard, movePieceForward, changeDirection, startMove };