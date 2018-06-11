import MyContext from './MyContext'

export default class EmployeePayslip extends React.Component {

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div style={{textAlign: 'center', fontSize: '20px'}}>
            <h1 style={{background: 'grey', color: 'white'}}>Employee Payslip</h1>
            <div>Full Name: {`${context.state.firstName} ${context.state.lastName}`}</div>
            <div>Pay Period: {context.state.paymentDate} 01 - {context.state.paymentDate} 30</div>
            <div>Gross Income: {context.state.grossIncome}</div>
            <div>Income Tax: {context.state.incomeTax}</div>
            <div>Net Income: {context.calculateNetIncome(context.state.grossIncome, context.state.incomeTax)}</div>
            <div>Super Amount: {context.calculateSuperAmount(context.state.grossIncome, context.state.superRate)}</div>
          </div>
        )}
      </MyContext.Consumer>
    )
  }
}
