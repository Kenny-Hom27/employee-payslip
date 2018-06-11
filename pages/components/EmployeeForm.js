import _ from 'lodash'
import MyContext from './MyContext'

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class EmployeeForm extends React.Component {

  renderMonths() {
    return _.map(MONTHS, (month) => {
      return <option value={month} key={month}>{month}</option>
    })
  }

  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <div style={{textAlign: 'center', fontSize: '20px'}}>
              <h1 style={{background: 'black', color: 'white'}}>Employee Form</h1>
              <form>
                <label>First Name: </label>
                <input type="text" onChange={context.changeFirstName}/>
                <label>Last Name: </label>
                <input type="text" onChange={context.changeLastName}/>
                <label>Annual Salary: </label>
                <input type="text" onChange={context.changeAnnualSalary}/>
                <label>Super Rate (%): </label>
                <input type="text" onChange={context.changeSuperRate}/>
                <label>Payment Start Date: </label>
                <select onChange={context.changePaymentDate}>
                  {this.renderMonths()}
                </select>
                <button onClick={() => this.props.submitForm()}>Submit</button>
              </form>
            </div>
          )}
        </MyContext.Consumer>
      </div>

    )
  }
}

export default EmployeeForm
