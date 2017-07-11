import thingsReducer from './things'
import { setThings, logOut } from '../actions'

describe('things reducer', () => {
    test('has initial state of null', () => {
        expect(thingsReducer(undefined, { type: 'whatever' })).toBeNull()
    })

    test('returns the value given by a setThings action', () => {
        expect(thingsReducer(undefined, setThings(['thing1', 'thing2', 'thing3']))).toEqual(
            ['thing1', 'thing2', 'thing3']
        )
    })

    test('returns null after the logout action arrives', () => {
        expect(thingsReducer(undefined, logOut())).toBeNull()
    })
})
