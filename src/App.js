import React, { Component } from 'react';
import formatNumber from 'format-number';
import photographer from './images/girl.png';
import './App.css';
import store from './store/index';
import { setAmount, addAmount, charityAmount } from './actions/index';

class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {totalAmount > 0 ? formatNumber({ prefix: '$' })(totalAmount) : '$ 0'}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={dispatchBtnAction}>
            WITHDRAW $10,000
          </button>
          <button data-amount="5000" onClick={dispatchBtnAction}>
            WITHDRAW $5,000
          </button>
        </section>
        <section className="App__buttons">
          <button data-amount="10000" onClick={addAmountBtn}>
            DEPOSIT $10,000
          </button>
          <button data-amount="5000" onClick={addAmountBtn}>
            DEPOSIT $5,000
          </button>
        </section>

        <p className="App__giveaway" onClick={charityBtnAction}>
          Give away all your cash to charity
        </p>
      </div>
    );
  }
}

const dispatchBtnAction = e => {
  const value = e.target.dataset.amount;
  store.dispatch(setAmount(value));
};

const addAmountBtn = e => {
  const value = e.target.dataset.amount;
  store.dispatch(addAmount(value));
};

const charityBtnAction = () => {
  store.dispatch(charityAmount());
};

export default App;
