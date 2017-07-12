// @flow

import React from 'react'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'
import { getHasLoginBegun, getHasLoginFailed } from '../selectors'

import type { State } from '../reducers'

type Props = {
    hasLoginFailed: boolean,
    hasLoginBegun: boolean,
}

const LoginPage = ({ hasLoginBegun, hasLoginFailed }: Props) => (
    <section>
        <h1>Log in</h1>
        <LoginForm />
        {hasLoginBegun ? <p>Logging in...</p> : null}
        {hasLoginFailed ? <p>Login failed! Try again.</p> : null}
    </section>
)

const mapStateToProps = (state: State) => ({
    hasLoginBegun: getHasLoginBegun(state),
    hasLoginFailed: getHasLoginFailed(state),
})

export default connect(mapStateToProps)(LoginPage)
