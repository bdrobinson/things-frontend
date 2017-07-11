// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { submitLogin } from '../actions'

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
            <form>
                <label>
                Username:
                    <input
                        type='text'
                        value={this.state.username}
                        onChange={event => {
                            this.setState({ username: event.target.value })
                        }}
                    />
                </label>
                <label>
                Password:
                    <input
                        type='password'
                        value={this.state.password}
                        onChange={event => {
                            this.setState({ password: event.target.value })
                        }}
                    />
                </label>
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
