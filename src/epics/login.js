// @flow

import type { Observable } from 'rxjs'

import { setThings } from '../actions'
import { SUBMIT_LOGIN } from '../constants/actionTypes'

const loginEpic = (actions$: Observable<Object>) =>
    actions$
        .filter(action => action.type === SUBMIT_LOGIN)
        .map(() => setThings(['thing1', 'thing2', 'thing3']))

export default loginEpic
