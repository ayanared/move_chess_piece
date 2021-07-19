const { TestWatcher } = require('jest');
const { printBoardString, isAtEdge, hasReachedEndOfBoard, movePieceForward, changeDirection } = require('./index');

test('board prints correctly', () => {
    let board = {
        num_of_cols: 4,
        num_of_rows: 5,
        piece_position_col: 0,
        piece_position_row: 0,
    }
    let expectedString = "-OXO\n" +
                         "OXOX\n" +
                         "XOXO\n" +
                         "OXOX\n" +
                         "XOXO\n" ;
    expect(printBoardString(board)).toEqual(expectedString);
})

test('returns true if piece is at right edge and in going in the right direction', () => {
    let board = {
        num_of_cols: 4,
        num_of_rows: 5,
        piece_position_col: 3,
        piece_position_row: 0,
        direction : 'right'
    }

    expect(isAtEdge(board)).toEqual(true);
})

test('returns true if piece is at left edge and in going in the left direction', () => {
    let board = {
        num_of_cols: 4,
        num_of_rows: 5,
        piece_position_col: 0,
        piece_position_row: 0,
        direction : 'left'
    }

    expect(isAtEdge(board)).toEqual(true);
})

test('returns false if piece is at left edge and in going in the right direction', () => {
    let board = {
        num_of_cols: 4,
        num_of_rows: 5,
        piece_position_col: 0,
        piece_position_row: 0,
        direction : 'right'
    }

    expect(isAtEdge(board)).toEqual(false);
})

test('returns true if piece is at end of the board', () => {
    let board = {
        num_of_cols: 4,
        num_of_rows: 5,
        piece_position_col: 0,
        piece_position_row: 4,
        direction : 'right'
    }

    expect(hasReachedEndOfBoard(board)).toEqual(true);
})

test('moves piece up and to the right when direction is right', () => {
    let board = {
        num_of_cols: 4,
        num_of_rows: 5,
        piece_position_col: 0,
        piece_position_row: 0,
        direction : 'right'
    }

    let expected_board = {
        num_of_cols: 4,
        num_of_rows: 5,
        piece_position_col: 1,
        piece_position_row: 1,
        direction : 'right'
    }

    expect(movePieceForward(board)).toEqual(expected_board);
})

test('moves piece up and to the left when direction is left', () => {
    let board = {
        num_of_cols: 4,
        num_of_rows: 5,
        piece_position_col: 3,
        piece_position_row: 3,
        direction : 'left'
    }

    let expected_board = {
        num_of_cols: 4,
        num_of_rows: 5,
        piece_position_col: 2,
        piece_position_row: 4,
        direction : 'left'
    }

    expect(movePieceForward(board)).toEqual(expected_board);
})

test('changes direction to left if direction is right', () => {
    let board = {
        direction: 'left'
    }
    let expectedBoard = {
        direction: 'right'
    }

    expect(changeDirection(board)).toEqual(expectedBoard);
})