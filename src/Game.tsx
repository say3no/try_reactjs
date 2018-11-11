import * as React from 'react';
import Board from './board/Board'
import './Game.css'
import Square from './board/Square';

type SquareType=string|null;
type History=SquareType[]

interface IGameProps {
}

interface IGameState {
    history: History;
    xIsNext: boolean;
}

class Game extends React.Component<IGameProps, IGameState> {
    constructor(props: IGameProps) {
        super(props);
        this.state={
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        };
    }

    public render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;