// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { submitLogin } from '../actions'
import './LoginForm.css'

type Props = {
    login: (username: string, password: string) => void,
}
type State = {
    username: string,
    password: string,
}

class LoginForm extends Component {
    props: Props
    state: State

    constructor (props: Props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    render () {
        return (
            <form className='LoginForm'>
                <p>
                    <label>
                        <span className='LoginForm__Label'>Username</span>
                        <input
                            type='text'
                            size='20'
                            value={this.state.username}
                            onChange={event => {
                                this.setState({ username: event.target.value })
                            }}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className='LoginForm__Label'>Password</span>
                        <input
                            type='password'
                            size='20'
                            value={this.state.password}
                            onChange={event => {
                                this.setState({ password: event.target.value })
                            }}
                        />
                    </label>
                </p>
                <button onClick={e => {
                    e.preventDefault()
                    this.props.login(this.state.username, this.state.password)
                }}>
                    Submit
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(submitLogin(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
