import MyProvider from './components/MyProvider'
import EmployeeForm from './components/EmployeeForm'
import EmployeePayslip from './components/EmployeePayslip'

class Home extends React.Component {
  state = {
    showForm: true
  }

  submitForm = () => {
    this.setState({
      showForm: false
    })
  }

  render() {
    return (
      <MyProvider>
        <div>
          {this.state.showForm ? <EmployeeForm submitForm={this.submitForm}/> : <EmployeePayslip/>}
        </div>
      </MyProvider>
    )
  }
}

export default Home
