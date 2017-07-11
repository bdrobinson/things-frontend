import thingsReducer from './things'
import { submitLogin } from '../actions'

describe('things reducer', () => {
    test('has initial state of null', () => {
        expect(thingsReducer(undefined, { type: 'whatever' })).toBeNull()
    })

    test('returns an array with mocked data once a login action arrives', () => {
        expect(thingsReducer(undefined, submitLogin('user', 'pass'))).toEqual(
            ['thing1', 'thing2', 'thing3']
        )
    })
})
