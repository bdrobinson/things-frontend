import { getThings, getIsLoggedIn } from './index'

describe('selectors', () => {
    describe('getThings', () => {
        test('returns the things prop', () => {
            expect(getThings({ things: 'some value' })).toEqual('some value')
        })
    })

    describe('getIsLoggedIn', () => {
        test('returns false if the things are null', () => {
            expect(getIsLoggedIn({ things: null })).toBe(false)
        })

        test('returns true if the things are non-null', () => {
            expect(getIsLoggedIn({ things: ['thing1', 'thing2'] })).toBe(true)
            expect(getIsLoggedIn({ things: [] })).toBe(true)
        })
    })
})
