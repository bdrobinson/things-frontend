// @flow

import { combineReducers } from 'redux'

import things from './things'
import hasLoginFailed from './hasLoginFailed'
import hasLoginBegun from './hasLoginBegun'

export default combineReducers({
    things,
    hasLoginFailed,
    hasLoginBegun,
})

export type State = {
    things: ?Array<string>,
    hasLoginFailed: boolean,
    hasLoginBegun: boolean,
}
