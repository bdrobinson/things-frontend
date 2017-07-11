// @flow

import React, { Component } from 'react'

type Props = {}
type State = {
    username: string,
    password: string,
}

export default class LoginForm extends Component {
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
                }}>
                    Submit
                </button>
            </form>
        )
    }
}
