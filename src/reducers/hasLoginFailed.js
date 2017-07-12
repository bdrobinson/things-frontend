// @flow

import { REQUEST_FAILED, SET_THINGS } from '../constants/actionTypes'

export default (state: boolean = false, action: Object) => {
    switch (action.type) {
    case REQUEST_FAILED:
        return true
    case SET_THINGS:
        return false
    default:
        return state
    }
}
