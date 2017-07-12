// @flow

import { Observable } from 'rxjs'

import { setThings, requestFailed } from '../actions'
import { SUBMIT_LOGIN } from '../constants/actionTypes'
import { fetchThings } from './requests'

const loginEpic = (actions$: Observable<Object>) =>
    actions$
        .filter(action => action.type === SUBMIT_LOGIN)
        .delay(400)
        .mergeMap(action => Observable
            .fromPromise(fetchThings(action.username, action.password))
            .map(things => setThings(things))
            .catch(e => Observable.of(requestFailed(e.message)))
        )

export default loginEpic
