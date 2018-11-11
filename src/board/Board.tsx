import * as React from 'react';
import Square from './Square'
type SquareType=string|null;

interface IBoardProps {
}

interface IBoardState {
    squares: SquareType[],
    xIsNext: boolean,
}

class Board extends React.Component<IBoardProps, IBoardState> {
    constructor(props: IBoardProps) {
        super(props);
        this.state={
            squares: Array<SquareType>(9).fill(null),
            xIsNext: true,
        };
    }

    public calculateWinner(squares: SquareType[]) {
        const lines=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        // tslint:disable-next-line:prefer-for-of
        for (let i=0; i<lines.length; i++) {
            const [a, b, c]=lines[i];
            if (squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    public renderSquare(i: number) {
        return <Square
            value={this.state.squares[i]}
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => this.handleClick(i)} />;
    }
    public handleClick(i: number) {
        const squares=this.state.squares.slice();
        if (this.calculateWinner(squares)||squares[i]) {
            return;
        }
        squares[i]='X';
        squares[i]=(this.state.xIsNext? 'X':'O')
        this.setState({
            squares,
            xIsNext: !this.state.xIsNext
        });
    }

    public render() {
        const winner=this.calculateWinner(this.state.squares)
        let status;
        if (winner) {
            status=' Winner: '+winner;

        } else {
            status='Next player: '+(this.state.xIsNext? 'X':'O');
        }
        return (
            <div>
                <div className="status"> {status}</div>
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