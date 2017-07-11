// @flow

import React from 'react'
import { connect } from 'react-redux'

import { getThings } from '../selectors'

type Props = {
    things: Array<string>
}

const ThingsPage = ({ things }: Props) => (
    <section>
        <h1>Things</h1>
        <ul>
            {things.map(thing => (
                <li key={thing}>{thing}</li>
            ))}
        </ul>
    </section>
)

const mapStateToProps = state => ({
    things: getThings(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ThingsPage)
