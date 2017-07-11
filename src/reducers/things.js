// @flow

import { SET_THINGS, LOGOUT } from '../constants/actionTypes'

export default (state: ?Array<string> = null, action: Object): ?Array<string> => {
    switch (action.type) {
    case SET_THINGS:
        return action.things
    case LOGOUT:
        return null
    default:
        return state
    }
}
