// @flow

import {
    SUBMIT_LOGIN,
    LOGOUT,
    SET_THINGS,
    REQUEST_FAILED,
} from '../constants/actionTypes'

export const submitLogin = (username: string, password: string) => ({
    type: SUBMIT_LOGIN,
    username,
    password,
})

export const logOut = () => ({
    type: LOGOUT,
})

export const setThings = (things: Array<string>) => ({
    type: SET_THINGS,
    things,
})

export const requestFailed = (message: string) => ({
    type: REQUEST_FAILED,
    message,
})
