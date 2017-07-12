// @flow

import React from 'react'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'
import { getHasLoginFailed } from '../selectors'

import type { State } from '../reducers'

type Props = {
    hasLoginFailed: boolean,
}

const LoginPage = ({ hasLoginFailed }: Props) => (
    <section>
        <h1>Log in</h1>
        <LoginForm />
        {hasLoginFailed ? <p>Login failed! Try again.</p> : null}
    </section>
)

const mapStateToProps = (state: State) => ({
    hasLoginFailed: getHasLoginFailed(state),
})

export default connect(mapStateToProps)(LoginPage)
