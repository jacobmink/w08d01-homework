import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0,
      value: 0
    };
    this.inputHolder = 0;
  }
  depositMoney = (e)=>{
      this.setState({
        balance: parseInt(this.state.balance) + parseInt(this.state.value)
      });
      // console.log(this.state.value)
  }
  withdrawMoney = ()=>{
    if(this.state.balance >= this.state.value){
      this.setState({
        balance: parseInt(this.state.balance) - parseInt(this.state.value)
      });
    }
  }
  handleSubmit = (e)=>{
    e.preventDefault();
  }
  handleChange = (e)=>{
    // console.log(typeof e.target.value)
    if(e.target.value && !isNaN(e.target.value)){
      this.setState({
        value: e.target.value
      });
      console.log(this.state.value + ' / ' + e.target.value)
    }else{
      console.log(this.state.value + ' / ' + e.target.value)
      this.setState({
        value: 0
      })
    }
  } 
  render() {
    let balanceClass = 'balance';
    if(this.state.balance === 0){
      balanceClass += ' zero'
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter an amount" onChange={this.handleChange} />
          <input type="submit" value="Deposit" onClick={this.depositMoney} />
          <input type="submit" value="Withdraw" onClick={this.withdrawMoney} />


        </form>
        
      </div>
    )
  }
}

export default Account;
