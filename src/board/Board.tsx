import * as React from 'react';
import Square from './Square'
type SquareType=('O'|'X'|null);

interface IBoardProps {
    squares: SquareType[],
    handleClick: (i: number) => void
}

class Board extends React.Component<IBoardProps> {


    public renderSquare(i: number) {
        return <Square
            value={this.props.squares[i]}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => this.props.handleClick(i)} />;
    }

    public render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;
