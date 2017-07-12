// @flow

import React from 'react'
import { connect } from 'react-redux'

import LoginPage from './LoginPage'
import ThingsPage from './ThingsPage'
import { getIsLoggedIn } from '../selectors'
import './App.css'

type Props = {
    isLoggedIn: boolean,
}

const App = ({ isLoggedIn }: Props) => (
    <div className='App'>
        {isLoggedIn ? <ThingsPage /> : <LoginPage />}
    </div>
)

const mapStateToProps = state => ({
    isLoggedIn: getIsLoggedIn(state),
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
