import React from "react";
import groceriesList from './components/GroceryArray';

import GroceryList from "./components/GroceryList";
import ListForm from "./components/ListForm";
import "./App.css";

export default class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      // this is the same as groceries: groceries
      groceries: groceriesList,
    };
  }

  addItem = (e, item) => {
    console.log("First Groceries: ", this.state.groceries);
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };

    this.setState({
      groceries: [...this.state.groceries, newItem]
    });
    console.log("Second Groceries: ", this.state.groceries);
  };

  // Class methods to update state
  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      groceries: this.state.groceries.map(item => {
        // for bananas
        // checks itemId against the id of bananas obj
        if (itemId === item.id) {
          // if they match, update the purchased boolean on that item
          return {
            ...item,
            purchased: !item.purchased
          };
          // this return generates the following obj:
          // { id: 123, name: "Bananas", purchased: true}
        }

        // if they don't match, just return the item
        return item;
      })
    });
  };

  clearPurchased = e => {
    e.preventDefault();

    this.setState({
      groceries: this.state.groceries.filter(item => !item.purchased)
    });
  };

  render() {
    // rendering is what gets put on the screen
    // the class App shows ListForm and GroceryList on the screen
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <GroceryList
          groceries={this.state.groceries}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}