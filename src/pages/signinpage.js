import React from 'react'
import FormInput from '../components/form-input'
import '../styles/form-input.styles.scss'

class SignInPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      email: '',
      password: ''
    })
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} className='form-style'>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleOnChange={this.handleOnChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleOnChange={this.handleOnChange}
            label='password'
            required
          />
          <button> Submit </button>
        </form>
      </div>
    )
  }
}

export default SignInPage