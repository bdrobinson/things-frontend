// @flow

import { combineReducers } from 'redux'

import things from './things'

export default combineReducers({
    things,
})

export type State = {
    things: ?Array<string>,
}
