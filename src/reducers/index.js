// @flow

import { combineReducers } from 'redux'

import things from './things'
import hasLoginFailed from './hasLoginFailed'

export default combineReducers({
    things,
    hasLoginFailed,
})

export type State = {
    things: ?Array<string>,
    hasLoginFailed: boolean,
}
