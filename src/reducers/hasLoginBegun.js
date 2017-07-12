// @flow

import { SUBMIT_LOGIN, LOGOUT, REQUEST_FAILED } from '../constants/actionTypes'

export default (state: boolean = false, action: Object): boolean => {
    switch (action.type) {
    case SUBMIT_LOGIN:
        return true
    case LOGOUT:
        return false
    case REQUEST_FAILED:
        return false
    default:
        return state
    }
}
