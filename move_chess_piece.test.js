const { TestWatcher } = require('jest');
const { print_board_string, isAtEdge, hasReachedEndOfBoard, movePieceForward } = require('./index');

test('board prints correctly', () => {
    let board = {
        num_of_cols: 4,
        num_of_rows: 5,
        piece_position_col: 0,
        piece_position_row: 0,
    }
    let expectedString = "X---\n" +
                         "----\n" +
                         "----\n" +
                         "----\n" +
                         "----\n" ;
    expect(print_board_string(board)).toEqual(expectedString);
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