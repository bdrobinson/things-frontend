// @flow

import React from 'react'
import { connect } from 'react-redux'

import LoginPage from './LoginPage'
import ThingsPage from './ThingsPage'
import { getIsLoggedIn } from '../selectors'

type Props = {
    isLoggedIn: boolean,
}

const App = ({ isLoggedIn }: Props) => (
    isLoggedIn ? <ThingsPage /> : <LoginPage />
)

const mapStateToProps = state => ({
    isLoggedIn: getIsLoggedIn(state),
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
