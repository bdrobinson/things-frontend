// @flow

import React from 'react'
import { connect } from 'react-redux'

import { getThings } from '../selectors'
import { logOut as createLogOut } from '../actions'

type Props = {
    things: Array<string>,
    logOut: () => void,
}

const ThingsPage = ({ things, logOut }: Props) => (
    <section>
        <h1>Things</h1>
        <ul>
            {things.map(thing => (
                <li key={thing}>{thing}</li>
            ))}
        </ul>
        <button onClick={() => logOut()}>Log out</button>
    </section>
)

const mapStateToProps = state => ({
    things: getThings(state),
})

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(createLogOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ThingsPage)
