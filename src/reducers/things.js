// @flow

import { SUBMIT_LOGIN } from '../constants/actionTypes'

export default (state: ?Array<string> = null, action: Object): ?Array<string> => {
    switch (action.type) {
    case SUBMIT_LOGIN:
        // As soon as the login action fires, create a dummy array
        return ['thing1', 'thing2', 'thing3']
    default:
        return state
    }
}
