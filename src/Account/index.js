import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0
    };
    this.inputHolder = 0;
  }
  depositMoney = (e)=>{
    this.setState({
      balance: parseInt(this.state.balance) + parseInt(this.inputHolder.value)
    })
  }
  withdrawMoney = ()=>{
    if(this.state.balance >= this.inputHolder.value){
      this.setState({
        balance: parseInt(this.state.balance) - parseInt(this.inputHolder.value)
      });
    }
  }
  render() {
    let balanceClass = 'balance';
    if(this.state.balance == 0){
      balanceClass += ' zero'
    }




    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(inputText)=>
          this.inputHolder = inputText
        } />
        <input type="button" value="Deposit" onClick={this.depositMoney} />
        <input type="button" value="Withdraw" onClick={this.withdrawMoney} />
      </div>
    )
  }
}

export default Account;
