// @flow

import { REQUEST_FAILED, SET_THINGS, SUBMIT_LOGIN } from '../constants/actionTypes'

export default (state: boolean = false, action: Object) => {
    switch (action.type) {
    case REQUEST_FAILED:
        return true
    case SET_THINGS:
        return false
    case SUBMIT_LOGIN:
        return false
    default:
        return state
    }
}
