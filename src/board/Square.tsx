import * as React from 'react';

type SquareType=string|null;

interface ISquareProps {
    value: SquareType;
    onClick: () => void;
}

class Square extends React.Component<ISquareProps> {
    public render() {
        return (
            <button
                className="square"
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square;