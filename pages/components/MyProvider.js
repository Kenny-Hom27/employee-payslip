import React, { Component } from 'react';
import MyContext from './MyContext';

export default class MyProvider extends Component {
  state = {
    firstName: '',
    lastName: '',
    annualSalary: '',
    superRate: '',
    paymentDate: '',
    grossIncome: '',
    incomeTax: '',
    netIncome: '',
    superAmount: ''
  };

  changeFirstName = event => {
    this.setState({ firstName: event.target.value });
  };
  changeLastName = event => {
    this.setState({ lastName: event.target.value });
  };
  changeAnnualSalary = event => {
    this.setState({ annualSalary: event.target.value });
    this.calculateGrossIncome(event.target.value);
    this.calculateIncomeTax(event.target.value);
  };
  changeSuperRate = event => {
    this.setState({ superRate: event.target.value });
  };
  changePaymentDate = event => {
    this.setState({ paymentDate: event.target.value });
  };

  calculateGrossIncome = salary => {
    const grossIncomeValue = Math.round(parseInt(salary) / 12);
    this.setState({ grossIncome: grossIncomeValue });
  };

  calculateIncomeTax = salary => {
    const salaryNum = parseInt(salary)
    switch (true) {
      case salaryNum > 180000:
        let incomeTaxValue1 = Math.round(Math.round(54232 + (salaryNum - 180000) * 0.45)/12);
        return this.setState({ incomeTax: incomeTaxValue1 });
      case salaryNum > 87000:
        let incomeTaxValue2 = Math.round(Math.round(19822 + (salaryNum - 87000) * 0.37)/12);
        return this.setState({ incomeTax: incomeTaxValue2 });
      case salaryNum > 37000:
        let incomeTaxValue3 = Math.round(Math.round(3572 + (salaryNum - 37000) * 0.325)/12);
        return this.setState({ incomeTax: incomeTaxValue3 });
      case salaryNum > 18000:
        let incomeTaxValue4 = Math.round(Math.round((salaryNum - 18200) * 0.19)/12);
        return this.setState({ incomeTax: incomeTaxValue4 });
      default:
        return 0;
    }
  };

  calculateNetIncome = (grossIncome, incomeTax) => {
    return grossIncome - incomeTax;
  };

  calculateSuperAmount = (grossIncome, superRate) => {
    return Math.round(grossIncome * superRate/100)
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          changeFirstName: this.changeFirstName,
          changeLastName: this.changeLastName,
          changeAnnualSalary: this.changeAnnualSalary,
          changeSuperRate: this.changeSuperRate,
          changePaymentDate: this.changePaymentDate,
          calculateNetIncome: this.calculateNetIncome,
          calculateSuperAmount: this.calculateSuperAmount
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
