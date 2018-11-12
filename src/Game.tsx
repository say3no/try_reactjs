import * as React from 'react';
import Board from './board/Board'
import './Game.css'

type SquareType=('O'|'X'|null);

// こんなふうに書くと、squaresを持つobjを格納する配列を表現できる
interface IHistoryData {
    squares: SquareType[];
}

interface IGameState {
    history: IHistoryData[];
    stepNumber: number;
    xIsNext: boolean;
}

class Game extends React.Component<{}, IGameState> {
    constructor() {
        super({});
        this.state={
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    public jumpTo(step: number) {
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0,
        });
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

    public handleClick(i: number) {
        const history=this.state.history.slice(0, this.state.stepNumber+1)
        const current=history[this.state.stepNumber];
        const squares=current.squares.slice();
        if (this.calculateWinner(squares)||squares[i]) {
            return;
        }
        squares[i]=(this.state.xIsNext? 'X':'O')
        this.setState({
            history: history.concat([{ // 配列に配列をつないでいく. pushを使わない理由は下記
                // Unlike the array push() method you might be more familiar with, 
                // the concat() method doesn’t mutate the original array, so we prefer it.
                squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    public render() {
        const history=this.state.history;
        const current=history[history.length-1];
        const winner=this.calculateWinner(current.squares);

        const moves=history.map((step, move) => {
            const desc=move?
                'Go to move #'+move:
                'Got to game start';
            return (
                <li key={move}>
                    <button
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick={() => this.jumpTo(move)}
                    > {desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status=' Winner: '+winner;
        } else {
            status='Next player: '+(this.state.xIsNext? 'X':'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        // tslint:disable-next-line:jsx-no-lambda
                        handleClick={(i: number) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;