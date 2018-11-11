import * as React from 'react';
import './App.css';


interface IShoppingList {
    name: string;
    item: string;
}

class ShoppingList extends React.Component<IShoppingList> {
    public render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                    <li>{this.props.item}</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;