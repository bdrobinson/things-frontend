import { Observable } from 'rxjs'

import loginEpic from './login'
import { setThings, submitLogin } from '../actions'

describe('loginEpic', () => {
    test('maps to an action containing the correct mock data', () => {
        loginEpic(Observable.of(submitLogin('user', 'password')))
            .subscribe(action => {
                expect(action).toEqual(setThings(['thing1', 'thing2', 'thing3']))
            })
    })
})
