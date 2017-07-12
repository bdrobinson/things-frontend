import { Observable } from 'rxjs'

import loginEpic from './login'
import { setThings, submitLogin, requestFailed } from '../actions'
import { fetchThings } from './requests'

jest.mock('./requests', () => ({
    fetchThings: jest.fn((username, password) => {
        // simple mock of the fetchThings API request.
        if (password === 'correct password') {
            return Promise.resolve(['thing1', 'thing2'])
        } else {
            return Promise.reject(new Error('Some error message'))
        }
    }),
}))

describe('loginEpic', () => {
    test('calls fetchThings with the correct args', async () => {
        await loginEpic(Observable.of(submitLogin('user', 'password')))
            .toPromise()
        expect(fetchThings.mock.calls).toEqual([
            ['user', 'password'],
        ])
    })

    describe('with a successful API request', () => {
        test('returns a setThings action containing the list of things', async () => {
            const loginAction = submitLogin('user', 'correct password')
            const outputActions = await loginEpic(Observable.of(loginAction))
                .toArray()
                .toPromise()
            expect(outputActions).toEqual([
                setThings(['thing1', 'thing2']),
            ])
        })
    })

    describe('with an unsuccessful API request', () => {
        test('returns a requestFailed action containing an error message', async () => {
            const loginAction = submitLogin('user', 'wrong password')
            const outputActions = await loginEpic(Observable.of(loginAction))
                .toArray()
                .toPromise()
            expect(outputActions).toEqual([
                requestFailed('Some error message'),
            ])
        })
    })
})
